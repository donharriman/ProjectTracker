/*  
    Progress Bar code

    Hack Tahoe TRPA Project Tracker prototype
    Code for America: Hack Tahoe Brigade
    
    Donald C. Harriman  June 2016
    @ https://github.com/donharriman
*/

/*  
  Progress Bar
  The progress bar consists of a group of blocks containing text.
  Each block represents a stage of the project review and approval process.
  The background color of the blocks indicate status of stages.

  The blocks are built during initialization, number and content
  determined by arguments to initialize
*/
const progressBar = (function () {
  //  the progress bar
  const $progressBar = $("#progress_bar");
  //  and its constituent blocks (built during initialize)
  let $progressBlocks;
  //  progress bar legend
  const $legend = $("#legend");

  return {
    initialize: initialize,
    update: update,
  }

  function initialize(agencyData) {
    //  build blocks
      //  ToDo - text could live elsewhere!!
    const blockDivClass = "progress-block alert stage stage-todo-color";
    const blockTextType = '<h3>';

    for (let ixStage = eStage.FIRST; ixStage <= eStage.LAST; ++ixStage) {
      let block = buildProgressBlock(ixStage);
      $($progressBar).append(block);
    }

    //  keep access to blocks for updating
    $progressBlocks = $progressBar.children();

    buildLegend();


    function buildProgressBlock(ixStage) {
      let stageNames = agencyData.stageNames;
      let blockText = stageNames[ixStage];
      return buildBlockDiv()
        .append(buildBlockText());

      function buildBlockDiv() {
        return $('<div>').attr('id', blockText)
          .addClass(blockDivClass);
      }

      function buildBlockText() {
        return $(blockTextType).html(blockText);
      }
    }
    function buildLegend() {
      $($legend).append('<p><span class="legend-item alert stage stage-completed-color">Completed</span></p>');
      $($legend).append('<p><span class="legend-item alert stage stage-active-color">Current</span></p>');
      $($legend).append('<p><span class="legend-item stage alert stage-todo-color">To be done</span></p>');
    }
  }

  function update(curStage) {
    $progressBlocks.removeClass("stage-completed-color");
    $progressBlocks.removeClass("stage-active-color");
    $progressBlocks.removeClass("stage-todo-color");

    $progressBlocks.slice(eStage.FIRST, curStage).addClass("stage-completed-color");
    $progressBlocks.eq(curStage).addClass("stage-active-color");
    $progressBlocks.slice(curStage+1).addClass("stage-todo-color");
  }

}());