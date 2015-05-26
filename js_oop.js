+function() { thoppesJS.console.log("********** OOP **********"); } ()

// http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/

function UserProto(name, email) {
	this.name = name;
	this.email = email;
}

UserProto.prototype = {
	/*
	* The one disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, 
	* so we have to set it manually. 
	* Else the result will be something like this - function Object() { [native code] }
	* Hence this line:
	*/
	// constructor: UserProto,

	loadUser: function() {
		thoppesJS.console.log("Loading user proto...");
	}, 

	saveUser: function() {
		thoppesJS.console.log("Saving user proto...");
	}
}

var up1 = new UserProto('a', 'a@a.com');
up1.saveUser();

function User(name, email) {
	this.name = name;
	this.email = email;

	this.loadUser = function() {
		thoppesJS.console.log("Loading user...");
	};

	this.saveUser = function() {
		thoppesJS.console.log("Saving user...");
	};
}

var u1 = new User('b', 'b@b.com');
u1.saveUser();

thoppesJS.console.log("********** end OOP ********** </br>");