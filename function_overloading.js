thoppesJS.console.log("********** function_overloading **********");

function User(id, name, dob) {
	this.id = id;
	this.name = name;
	this.dob = dob;
}

User.prototype = {
	findAll: function() {
		thoppesJS.console.log("Calling FindAll");
	},

	findById: function(id) {
		thoppesJS.console.log("Calling FindById");
	},

	findByNameDOB: function(name, dob) {
		thoppesJS.console.log("Calling FindByNameDOB");
	}
}

User.prototype.find = function() {
	if(arguments.length === 0) {
		return this.findAll();
	}

	if(arguments.length === 1 && typeof (arguments[1] === 'number')) {
		return this.findById(arguments);
	}


	return this.findByNameDOB(arguments);
}


var user = new User(0, 'test', '01/01/01');
user.find();

user.find(0);

user.find('aa', 'aa');


thoppesJS.console.log("********** end function_overloading ********** </br>");