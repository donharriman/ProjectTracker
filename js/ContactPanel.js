/*  
    Contact Panel code

    Hack Tahoe TRPA Project Tracker prototype
    Code for America: Hack Tahoe Brigade
    
    Donald C. Harriman  June 2016
    @ https://github.com/donharriman
*/

const contactPanel = (function () {

  return {
    initialize: initialize,
    update: update,
  }

  function initialize(agencyData) {
		$("#address").html(addressText(agencyData.agencyAddress));
  }

  function update(curStage, projectData) {
    stage = projectData[curStage];
    $("#contact").html(contactText(stage.contact));
  }
   
  function contactText(contact) {
		//  ToDo - generalize
		return `${contact.name}<br>${contact.dept}<br>${contact.email}<br>${contact.phone}`;
	}

	function addressText(address) {
		//  ToDo - generalize
		return `${address[0]}<br>${address[1]}`;
	}

}());