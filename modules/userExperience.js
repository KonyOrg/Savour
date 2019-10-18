//Type your code here
/**
 * @function showProgressIndicator
 *
 */
function showProgressIndicator (loadingMsg)
{
	var form = kony.application.getCurrentForm();
  	var flexBlurBackgroundDuringProgress = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "flexBlurBackgroundDuringProgress",
        "width": "100%",
        "zIndex": 9,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "onClick": emptyCallback,
        "skin": "sknFlex2"
    }, {}, {});
  	var flexProgressIndicator = new kony.ui.FlexContainer({
        "centerX": "50%",
        //"centerY": "25%",
        "bottom": "0dp",
        "height": "50dp",
        "id": "flexProgressIndicator",
        "width": "100%",
        "zIndex": 10,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "sknFlex1"
    }, {}, {});
    flexProgressIndicator.setDefaultUnit(kony.flex.DP);
    var imgLoadingIndicator = new kony.ui.Image2({
        "bottom": 5,
        "centerY": "50%",
        "height": "40dp",
        "id": "imgLoadingIndicator",
        "left": "10dp",
        "src": "konyicon.png",
        "width": "40dp",
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblLoadingIndicator = new kony.ui.Label({
        "bottom": 10,
        "centerY": "50%",
        "id": "lblLoadingIndicator",
        "left": 10,
        "text": loadingMsg+" ...",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknLbl5",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexProgressIndicator.add(imgLoadingIndicator, lblLoadingIndicator);
  	form.add (flexBlurBackgroundDuringProgress);
  	form.add (flexProgressIndicator);
	animateProgressIndicator ();
}

/**
 * @function dismissLoadingIndicator
 *
 */
function dismissLoadingIndicator ()
{
  var form = kony.application.getCurrentForm();
  if (null !== form.flexBlurBackgroundDuringProgress)
	  form.remove (form.flexBlurBackgroundDuringProgress);
  if (null !== form.flexProgressIndicator)
	  form.remove (form.flexProgressIndicator);
}

/**
 * @function animateProgressIndicator
 *
 */
function animateProgressIndicator ()
{
  var currentForm = kony.application.getCurrentForm();

  var transform1 = kony.ui.makeAffineTransform();
  transform1.rotate3D(0,0,1,0);

  var transform2 = kony.ui.makeAffineTransform();
  transform2.rotate3D(90,0,1,0);

  var transform3 = kony.ui.makeAffineTransform();
  transform3.rotate3D(180,0,1,0);
  
  var transform4 = kony.ui.makeAffineTransform();
  transform4.rotate3D(270,0,1,0);

  var transform5 = kony.ui.makeAffineTransform();
  transform5.rotate3D(360,0,1,0);

  var animationObject = {
                          0: {"transform": transform1,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          25: {"transform": transform2,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          50: {"transform": transform3,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          75: {"transform": transform4,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          100: {"transform": transform5,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
 						 };
  
  var animationConfigObject = {
                                "duration":1,
                                "iterationCount":0,
                                "direction":kony.anim.DIRECTION_NONE,
                                "fillMode":kony.anim.FILL_MODE_NONE
                              };
  var animationCallbackObject = {"animationEnd" : function(){}};

  currentForm.imgLoadingIndicator.animate(kony.ui.createAnimation(animationObject),animationConfigObject,animationCallbackObject);
}

/**
 * @function emptyCallback
 *
 */
function emptyCallback ()
{
  
}