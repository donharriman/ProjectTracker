/*  
	Project Tracker code

	Hack Tahoe TRPA Project Tracker prototype
	Code for America: Hack Tahoe Brigade
	
	Donald C. Harriman  June 2016
	@ https://github.com/donharriman
*/

//  Initialize
//  DOM is built, so we can mess with it ;)
$(document).ready(function () {
	projectTracker.initialize();
});

//  projectTracker in an IIFE - no polluting the global namespace
const projectTracker = (function () {
	//  Our prototype starts in the first state.
	//  In production, only one state would be displayed,
	//  based on the progress of the project application
	//  in the approval process.

  //  ToDo - better home for this
  const programTitle = "Project Tracker";

	//	agencyData is constant across projects
	//	includes info for all stages
	let agencyData;

  //  current project, includes all stages
	let project;
	//	project stage currently displayed
  let curStage;

	function initialize() {
		//console.log("--initialize--");
		//	ToDo - better way?
		agencyData = AgencyData;

		 //  current project and initial stage
		//	ToDo data from real project
		project = ProjectData.getProject(1);
		//	ToDo - get from project
		curStage = 3;


    initializeTitle();
    
		progressBar.initialize(agencyData);
    messagePanel.initialize(agencyData);
    contactPanel.initialize(agencyData);
    trackerButtons.initialize(agencyData);

    //  ToDo - current project state
    update(curStage);
  }

  function update(curStage) {
    progressBar.update(curStage, project);
	  messagePanel.update(curStage, project);
	  contactPanel.update(curStage, project);
	  trackerButtons.update(curStage, project);
  }
	
	function initializeTitle() {
		//  build title from agency name and program title
		let title = `${AgencyData.agencyName} ${programTitle}`;
		$("#title_tab").html(programTitle);
		$("#title_page").html(title);
	}


	function next() {
    if (curStage < eStage.LAST) {
      update(++curStage);
    }
	}
  function back() {
    if (curStage > eStage.FIRST) {
      update(--curStage);
    }
	}

	//  projectTracker public interface
	return {
		initialize: initialize,
    update: update,
		next: next,
    back: back,
	}

} ());
