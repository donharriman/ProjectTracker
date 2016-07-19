/*  Mock project data

    Hack Tahoe TRPA Project Tracker prototype
    Code for America: Hack Tahoe Brigade
    
    Donald C. Harriman  June 2016
    @ https://github.com/donharriman
*/
/*
A 'project' consists of an array of 'stage' objects.
'stage' object has properties:
    stage: eStage - project status
    contact: object
    alert: object - optional, for mocking project that needs applicant action
   
'contact' object properties:
    name: string
    dept: string
    email: string
    phone: string
};

'alert' object properties:
    message: string
    todo: string

*/


//  create three mock projects
//  projects[0] proceeds through process with no problems
//  projects[1] hits snags in ASSIGNED and APPROVAL stages 
//          (those stages have alert properties)
//  projects[2] is withdrawn in REVIEW stage.

ProjectData = (function () {

  const projects = createProjects();
  //   console.log("--createProjects--");
  //   console.log('projects: ', projects );

  return {
    getProject: getProject,
  };

  function getProject(ixProject) {
    return projects[ixProject];
  }

  function createProjects() {
    //  console.log("--createProjects--");
    const contacts = setupContacts();

    let projects = [];
    projects[0] = buildProject();
    projects[1] = buildProject();
    projects[2] = buildProject();

    //  add problems to second mock project
    let problemProj = projects[1];
    problemProj[eStage.ASSIGNED].issue = {
      message: 'Application is Incomplete.',
      todo: 'Please submit a traffic study. Your application will be marked as incomplete until this item is received.',
    };

    problemProj[eStage.APPROVAL].issue = {
      message: 'Plan revision has been submitted.',
      todo: 'Please refer to file number ERSP2016-xx.',
    };

    //console.log(alertProj[eStage.ASSIGNED]);
    //console.log(alertProj[eStage.APPROVAL]);

    //  project withdrawn in review stage
    let withdrawnProj = projects[2];
    withdrawnProj[eStage.REVIEW].message = 'Project Withdrawn.';

    return projects;

    function buildProject() {
      //  console.log("--buildProject--");
      let stages = [];
      for (let ixStage = eStage.FIRST; ixStage <= eStage.LAST; ++ixStage) {
        let stage = {};
        stage.eStage = ixStage;
        stage.contact = contacts[ixStage];
        stages.push(stage);
      }
      //  console.log("stages: ", stages);
      return stages;
    }

    // 
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

    //  contacts
    function setupContacts() {
      //  console.log("--setupContacts--");
      const front_counter = {
        name: 'Aly B.',
        dept: 'Front Counter',
        email: 'trpa@trpa.org',
        phone: '775 123-4567'
      };

      const planner = {
        name: 'Jen S.',
        dept: 'Current Planning',
        email: 'trpa@trpa.org',
        phone: '775 123-4567'
      };

      const fees_admin = {
        name: 'Linda A.',
        dept: 'Fees Administration',
        email: 'trpa@trpa.org',
        phone: '775 123-4567'
      };

      let contacts = [];
      contacts[eStage.RECEIVED] = front_counter;
      contacts[eStage.ASSIGNED] = planner;
      contacts[eStage.REVIEW] = planner;
      contacts[eStage.CONDITIONAL] = planner;
      contacts[eStage.APPROVAL] = planner;
      contacts[eStage.INSPECTION] = fees_admin;
      contacts[eStage.DONE] = planner;

      //  console.log("contacts: ", contacts);
      return contacts;
    }


  }
} ());