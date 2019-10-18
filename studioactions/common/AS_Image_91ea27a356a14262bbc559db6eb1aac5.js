function AS_Image_91ea27a356a14262bbc559db6eb1aac5(eventobject, x, y) {
    var self = this;

    function showPreviousForm() {
        kony.application.getPreviousForm().show();
    }
    var formID = kony.application.getCurrentForm().id;
    if ("frmHome" === formID) this.view.flexHdr.imgBack.setVisibility(false);
    else this.view.flexHdr.imgBack.onTouchEnd = showPreviousForm;
}