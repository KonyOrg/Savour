function AS_Image_5ff4cecea01d42d1a97e106481e2fad7(eventobject, x, y) {
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