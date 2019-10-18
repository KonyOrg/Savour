define({ 
 //Type your controller code here 
  onNavigate : function (context) {
    //this.hotelsList = context.placeSearchResults;
    kony.print ("Entering into Controller for frmHotelDetails - onNavigated: "+JSON.stringify(context));
    this.view.flexHdr.imgBack.setVisibility(true);
   	this.view.lblName.text = context[0].name;
    this.view.lblAddress.text = context[0].vicinity;
    this.view.lblRating.text = context[0].rating;
    this.view.map.locationData = [
      								{"showcallout":false,
                                     "lat":context[0].lat,
                                     "lon":context[0].lon,
                                     "image":"pin.png",
                                     "name":context[0].name,
                                     "desc":context[0].vicinity}
    							 ];
    kony.print ("Exiting out of onNavigated in Controller for frmHotelDetails");
  }

 });