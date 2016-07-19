/*  
    Message Panel code

    Hack Tahoe TRPA Project Tracker prototype
    Code for America: Hack Tahoe Brigade
    
    Donald C. Harriman  June 2016
    @ https://github.com/donharriman
*/

const messagePanel = (function () {
  //  access to DOM
  //  stage panel is parent of status and message
  const $stagePanel = $("#stage_panel");
  const $stageStatus = $("#stage_status");
  const $stageMessage = $("#stage_message");

  //  issue panel is parent of message and todo
  const $issuePanel = $("#issue_panel");
  const $issueMessage = $("#issue_message");
  const $issueTodo = $("#issue_todo");

  let agencyStages;

  return {
    initialize: initialize,
    update: update,
  }

  function initialize(agencyData) {
    agencyStages = agencyData.stages;
  }

  function update(curStage, projectData) {
    let projectStage = projectData[curStage];
    let agencyStage = agencyStages[curStage];

    projectStage.issue ? issuePanelShows() : stagePanelShows();

    function updateStagePanel() {
			//  status and message come from agency data
			$stageStatus.html("<h3>" + agencyStage.status + "</h3>");
			$stageMessage.html("<h4>" + agencyStage.message + "</h4>");
		}

    function updateIssuePanel() {
      $("#issue_message").html("<h3>" + projectStage.issue.message + "</h3>");
      $("#issue_todo").html("<h4>" + projectStage.issue.todo + "</h4>");
    }

    function issuePanelShows() {
 	    updateIssuePanel(); 

      $issuePanel.show();
      $stagePanel.hide();
    }
    function stagePanelShows() {
      updateStagePanel();
      
      $stagePanel.show();
      $issuePanel.hide();
    }
  }
   
}());