thoppesJS.console.log("********** barclays **********");

var RMPObject = (function() {
})();

var Person = function(fn, ln) {
	this.firstname = fn;
	this.lastname = ln;
};

Person.prototype = function() {
	var decoration = " : ";
	var emailsep = ", ";

	getDName = function(thisObj) {
		thoppesJS.console.log(thisObj.firstname +decoration+thisObj.lastname);
	},

	getEmailName = function() {
		thoppesJS.console.log(this.lastname +emailsep+this.firstname);
	},

	getDecoratedName = function() {
		getDName(this);
	};

	return {
		getEmailName: getEmailName,
		getDecoratedName: getDecoratedName
	}
}();

var p1 = new Person("Jaganlal", "Thoppe");
p1.getEmailName();
p1.getDecoratedName();

var Superman = function(fn, ln) {
	this.fly = "can";
	this.xrayvision = "have X-Ray Vision";
	this.lazereyes = "have LAZER Vision";
	this.nettrikan = "don't have Nettrikan. Only Shiv has it :p";

	Person.call(this, fn, ln);
};

Superman.prototype = Object.create(Person.prototype);
Superman.prototype.constructor = Superman;

Superman.prototype = function() {

	canFly = function(thisObj) {
		thoppesJS.console.log("I "+thisObj.fly+" fly");
	}, 
	
	whatVision = function(thisObj) {
		thoppesJS.console.log("I "+thisObj.xrayvision);
	},

	whatEyes = function(thisObj) {
		thoppesJS.console.log("I "+thisObj.lazereyes);
	},

	doIHaveNettrikan = function(thisObj) {
		thoppesJS.console.log("I "+thisObj.nettrikan);
	},

	whatCanIDo = function() {
		canFly(this);
		whatVision(this);
		whatEyes(this);
		doIHaveNettrikan(this);
	};

	return {
		whatCanIDo: whatCanIDo,
		getDecoratedName: getDecoratedName
	}
}();

var s1 = new Superman("Adhviklal", "Thoppe");
s1.getDecoratedName();
s1.whatCanIDo();

var obj = {
	foo: function() {
		thoppesJS.console.log("Inside obj::foo");
	}, 

	foo1: function() {
		thoppesJS.console.log("Inside obj::foo1");
	}
}

obj.foo1();

thoppesJS.console.log("********** end barclays ********** </br>");