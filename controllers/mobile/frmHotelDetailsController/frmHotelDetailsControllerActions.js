define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for imgBack **/
    AS_Image_e912f55c5bf9405d90bd03eb26d42b30: function AS_Image_e912f55c5bf9405d90bd03eb26d42b30(eventobject, x, y) {
        var self = this;
        self.AS_Image_5ff4cecea01d42d1a97e106481e2fad7(eventobject, x, y);
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