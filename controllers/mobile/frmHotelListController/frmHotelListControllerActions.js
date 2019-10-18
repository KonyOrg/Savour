define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for imgBack **/
    AS_Image_ha7fb6a48fe94d09a9b5ffa55ccb49dd: function AS_Image_ha7fb6a48fe94d09a9b5ffa55ccb49dd(eventobject, x, y) {
        var self = this;
        self.AS_Image_5ff4cecea01d42d1a97e106481e2fad7(eventobject, x, y);
    },
    /** onRowClick defined for segHotelsList **/
    AS_Segment_eb6c19ba09714c198efe620406927938: function AS_Segment_eb6c19ba09714c198efe620406927938(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var navigateToFrmHotelDetails = new kony.mvc.Navigation("frmHotelDetails");
        navigateToFrmHotelDetails.navigate(this.view.segHotelsList.selectedRowItems);
    },
    AS_Image_5ff4cecea01d42d1a97e106481e2fad7: function AS_Image_5ff4cecea01d42d1a97e106481e2fad7(eventobject, x, y) {
        var self = this;
        var currentFormID = this.getCurrentForm();
        if ("frmHotelDetails" === currentFormID) {
            var navigateToFrmHotelList = new kony.mvc.Navigation("frmHotelList");
            navigateToFrmHotelList.navigate(null);
        } else if ("frmHotelList" === currentFormID) {
            var navigateToFrmHome = new kony.mvc.Navigation("frmHome");
            navigateToFrmHome.navigate();
        }
    }
});