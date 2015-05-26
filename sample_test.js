thoppesJS.console.log("********** sample_test **********");

this.x = 10;

var gEmployees = null;

var myModule = {
  x: 100,

  getX: function() {
    return this.x;
  }
};

(function setEmployees() {
	gEmployees = [
	    {"firstName":"John", "lastName":"Doe"},
	    {"firstName":"Anna", "lastName":"Smith"},
	    {"firstName":"Peter","lastName": "Jones"}
	];
})();

thoppesJS.console.log(JSON.stringify(gEmployees));

function updateEmployees(employees) {
	for(var i=0; i<employees.length; i++) {
		employees[i].firstName = "FN - "+employees[i].firstName;
		employees[i].lastName = "LN - "+employees[i].lastName;
	}
}

updateEmployees(gEmployees);
thoppesJS.console.log(JSON.stringify(gEmployees));

var bitWiseTest = 1;

bitWiseTest <<= 1;
thoppesJS.console.log(bitWiseTest);

bitWiseTest <<= 2;
thoppesJS.console.log(bitWiseTest);

bitWiseTest >>= 2;
thoppesJS.console.log(bitWiseTest);

bitWiseTest >>= 1;
thoppesJS.console.log(bitWiseTest);

thoppesJS.console.log("********** end sample_test ********** </br>");