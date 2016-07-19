/*  
    Button handling code

    Hack Tahoe TRPA Project Tracker prototype
    Code for America: Hack Tahoe Brigade
    
    Donald C. Harriman  June 2016
    @ https://github.com/donharriman
*/

const trackerButtons = (function() {
  //  button access
  const $buttonNext = $("#button_next");
	function buttonNext() { return $buttonNext }

  const $buttonBack = $("#button_back");
	function buttonBack() { return $buttonBack }

  return {
    initialize: initialize,
    update: update,
  }

  function initialize() {
    //  set onClick handlers
    $buttonBack.on("click", projectTracker.back);
    $buttonNext.on("click", projectTracker.next);
  }

  function update(curStage) {
    //  if FIRST, back is disabled
    //  if LAST, next is disabled
    enableButton( buttonBack() );
    enableButton( buttonNext() );
    if (curStage === eStage.FIRST) disableButton( buttonBack() );
    if (curStage === eStage.LAST) disableButton( buttonNext() );
  }

  function enableButton($button) {
    $button.prop("disabled", false);
  }

  function disableButton($button) {
    $button.prop("disabled", true);
  }

}());