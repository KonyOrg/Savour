define({ 
  //Type your controller code here 
  onNavigate : function (context) {
    //this.hotelsList = context.placeSearchResults;
    kony.print ("Entering into Controller for frmHotelList - onNavigated");
    this.view.flexHdr.imgBack.setVisibility(true);
    if (null !== context) {
      kony.print ("context: "+JSON.stringify(context));
      var hotelsList = context.placeSearchResults;
      this.view.segHotelsList.widgetDataMap = {"lblName":"name","lblAddress":"vicinity","lblRating":"rating"};
      for (var i = 0; i<hotelsList.length; i++)
        hotelsList[i].rating = "Rating: "+hotelsList[i].rating;
      this.view.segHotelsList.setData (hotelsList);
    }
    kony.print ("Exiting out of onNavigated in Controller for frmHotelList");
  }
  
 });