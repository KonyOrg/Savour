define({ 
  //Type your controller code here  
  isOnShakeEventHandlerInProgress : false,
  
  onNavigate : function () {
	kony.print ("Entering into Controller for frmHome - onNavigated");
    this.view.flexHdr.imgBack.setVisibility(false);
	kony.print ("Exiting out of Controller for frmHome - onNavigated");
  },
  
  setSelectedRangeValue : function () {
	kony.print ("Entering into Controller for frmHome - setSelectedRangeValue");
    this.view.lblSearchRangeValue.text = this.view.slider.selectedValue + " miles";
	kony.print ("Exiting out of Controller for frmHome - setSelectedRangeValue");
  },
  
  onShake : function () {
	kony.print ("Entering into Controller for frmHome - onShake");
    if (!this.isOnShakeEventHandlerInProgress) {
      this.isOnShakeEventHandlerInProgress = true;
      var positionoptions = {enableHighAccuracy: false, timeout: 100000, maximumAge: 120000};
      showProgressIndicator ("Retrieving current location");
  	  kony.location.getCurrentPosition(this.getCurrentPositionSuccessCallback.bind(this), 
                                       this.getCurrentPositionErrorCallback.bind(this), 
                                       positionoptions);
    }
	kony.print ("Exiting out of Controller for frmHome - onShake");
  },
  
  getCurrentPositionSuccessCallback : function (position) {
	kony.print ("Entering into Controller for frmHome - getCurrentPositionSuccessCallback: "+JSON.stringify(position));
    dismissLoadingIndicator ();
    this.fetchNearByRestaurants (position);
	kony.print ("Exiting out of getCurrentPositionSuccessCallback in Controller for frmHome");
  },
  
  getCurrentPositionErrorCallback : function (error) {
	kony.print ("Entering into Controller for frmHome - getCurrentPositionErrorCallback: "+JSON.stringify(error));
    dismissLoadingIndicator ();
    alert ("Unable to retrieve current location. Please turn on locations service (GPS)");
	kony.print ("Exiting out of getCurrentPositionErrorCallback in Controller for frmHome");
  },
  
  fetchNearByRestaurants : function (position) {
	kony.print ("Entering into Controller for frmHome - fetchNearByRestaurants");
    var googlePlaces = KNYMobileFabric.getIntegrationService("GooglePlaces");//kony.sdk.getCurrentInstance().getIntegrationService  ("GooglePlaces");
    var selectedRange = this.view.slider.selectedValue*1000;
    //var data = {"latitude": "17.4485314","longitude": "78.3700234","rankby": "prominence","type": "restaurant","radius": selectedRange+""};
    var data = {"latitude": position.coords.latitude,
                "longitude": position.coords.longitude,
                "rankby": "prominence","type": "restaurant","radius": selectedRange+""};
    var headers= {};
    //dismissLoadingIndicator ();
    showProgressIndicator ("Retrieving nearby restaurants");
    kony.print("fetchNearByRestaurants using the data: "+JSON.stringify(data));
    googlePlaces.invokeOperation("placeSearch", headers, data, 
                                 this.fetchNearByRestaurantsSuccessCallback.bind(this), 
                                 this.fetchNearByRestaurantsFailureCallback.bind(this));
	kony.print ("Exiting out of fetchNearByRestaurants in Controller for frmHome");
  },
  
  fetchNearByRestaurantsSuccessCallback : function (response) {
	kony.print ("Entering into Controller for frmHome - fetchNearByRestaurantsSuccessCallback");
    //alert (JSON.stringify(response));
    dismissLoadingIndicator ();
    var navigateToFrmHotelList = new kony.mvc.Navigation("frmHotelList");
    navigateToFrmHotelList.navigate(response);
    //navigateToFrmHotelList.navigate();
	kony.print ("Exiting out of fetchNearByRestaurantsSuccessCallback in Controller for frmHome");
  },
  
  fetchNearByRestaurantsFailureCallback : function (error) {
	kony.print ("Entering into Controller for frmHome - fetchNearByRestaurantsFailureCallback");
    dismissLoadingIndicator ();
    alert ("Unable to find nearby restaurants at this moment. Please try again later");
	kony.print ("Exiting out of fetchNearByRestaurantsFailureCallback in Controller for frmHome");
  }

});