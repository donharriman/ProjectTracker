/*  Mock Agency data

    Hack Tahoe TRPA Project Tracker prototype
    Code for America: Hack Tahoe Brigade

    Donald C. Harriman  June 2016
    @ https://github.com/donharriman
*/
/*
An agency defines the stages it requires a project to go through.
For each stage, the agency defines:
  stage name: name to be displayed in progress bar
  status: terse statement of project status in current stage
  message: brief explanation of current project status
  
*/
//  enums for project stages
const eStage = enumFL(['RECEIVED',
                        'ASSIGNED',
                        'REVIEW',
                        'CONDITIONAL',
                        'APPROVAL',
                        'INSPECTION',
                        'DONE',
                        ]);

const AgencyData = (function () {
//  return createAgencyStages();
  const agencyName = "TRPA";
  
  //  ToDo - generalize address
  const agencyAddress = [
    "P.O. Box 5301",
    "Stateline, NV 89449",
  ];
  const stageNames = [
		"Received",
		"Assigned",
		"Review",
		"Conditional",
		"Approval",
		"Inspection",
		"Done",
	];


  const stages = createAgencyStages();
  //console.log('stages: ', stages );

  return {
    agencyName: agencyName,
    agencyAddress: agencyAddress,
    stageNames: stageNames,
    stages: stages,
  };

  function createAgencyStages() {
  //  console.log("--createAgencyStages--");
    const status = setupStatus();
    const messages = setupMessages();

    return buildStages();


    function setupStatus() { 
      //  console.log("--setupStatus--");
      let status = [];
      status[eStage.RECEIVED] = 'Application Received.';                          
      status[eStage.ASSIGNED] = 'Assigned to a Planner.';                          
      status[eStage.REVIEW] = 'In Review.';                          
      status[eStage.CONDITIONAL] = 'Conditional Permit Issued.';                          
      status[eStage.APPROVAL] = 'Final Permit Approval.';                          
      status[eStage.INSPECTION] = 'Final Inspection.';                          
      status[eStage.DONE] = 'Complete.'; 
      
      //  console.log("status: ", status);
      return status;     
    }                    
                      
    // messages - brief explanation of current project status
    function setupMessages() {
      //  console.log("--setupMessages--");
      let messages = [];
      messages[eStage.RECEIVED] = 'The application has been received by TRPA, and will be assigned to a planner for review.';
      messages[eStage.ASSIGNED] = 'The application has been assigned to a planner. You will be notified by email if additional information is needed.';
      messages[eStage.REVIEW] = 'The application was determined to be complete and is currently under review.';
      messages[eStage.CONDITIONAL] = 'The proposed project has been approved and a conditional permit has been issued. You are required to complete all "prior to acknowledgment" conditions. Once these conditions are completed, you will need to schedule an appointment to finalize your permit.';
      messages[eStage.APPROVAL] = 'Your project has been approved! You may now install temporary, construction BMPs on your project site. Once BMPs are in place, please contact Matt Miller, TRPA Compliance Inspector, to schedule an initial site inspection. Please be advised no construction, excavation, or demolition  may occur pior to an initial site inspection.';
      messages[eStage.INSPECTION] = 'Congratulations, the project passed final inspection! Thank you for doing your part to protect Lake Tahoe.';
      messages[eStage.DONE] = 'The project is complete. Any applicable refundable fees have been returned.';     
      
      //  console.log("messages: ", messages);
      return messages;
    }

    function buildStages() {
      //  console.log("--setupMessages--");
      let stages = [];
      for (let ixStage=eStage.FIRST; ixStage <= eStage.LAST; ++ixStage) {
        let stage = {};
        stage.status = status[ixStage];
        stage.message = messages[ixStage];
        stages.push(stage);
      }
      return stages;
    }
  } //  createAgencyStages
}());