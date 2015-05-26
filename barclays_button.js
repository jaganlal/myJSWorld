thoppesJS.console.log("********** barclays **********");

function createButtonB() {

	//Create an input type dynamically.   
  var element = document.createElement("input");
  //Assign different attributes to the element. 
  element.type = "button";
  element.value = "Button B"; // Really? You want the default value to be the type string?
  element.name = "buttonB";  // And the name too?
  element.onclick = function() { // Note this is a function
      alert("blabla");
  };

  document.body.appendChild(element);
}

thoppesJS.console.log("********** end barclays ********** </br>");