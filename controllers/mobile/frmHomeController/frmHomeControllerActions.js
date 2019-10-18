define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for imgBack **/
    AS_Image_af4783ed4b66407fafeb5cc0432ebea1: function AS_Image_af4783ed4b66407fafeb5cc0432ebea1(eventobject, x, y) {
        var self = this;
        self.AS_Image_5ff4cecea01d42d1a97e106481e2fad7(eventobject, x, y);
    },
    /** onSlide defined for slider **/
    AS_Slider_g710a89e370249dd90921e7e3a1b8b22: function AS_Slider_g710a89e370249dd90921e7e3a1b8b22(eventobject, selectedvalue) {
        var self = this;
        this.setSelectedRangeValue();
    },
    /** onSelection defined for slider **/
    AS_Slider_d5b963231d694dc38f4765d320231728: function AS_Slider_d5b963231d694dc38f4765d320231728(eventobject, selectedvalue) {
        var self = this;
        this.isOnShakeEventHandlerInProgress = false;
    },
    /** preShow defined for frmHome **/
    AS_Form_edd8c40859c243b9b7099c1154cad080: function AS_Form_edd8c40859c243b9b7099c1154cad080(eventobject) {
        var self = this;
        this.isOnShakeEventHandlerInProgress = false;
    },
    /** postShow defined for frmHome **/
    AS_Form_aeac242bb9034c8692c38df7eb5518a5: function AS_Form_aeac242bb9034c8692c38df7eb5518a5(eventobject) {
        var self = this;
        kony.accelerometer.registerAccelerationEvents({
            shake: this.onShake.bind(this)
        });
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