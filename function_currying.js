/* https://javascriptweblog.wordpress.com/2010/04/05/curry-cooking-up-tastier-functions */

thoppesJS.console.log("********** function_currying **********");

function toArray(a) {
	return Array.prototype.slice.call(a);
}

Function.prototype.curry = function() {
	if(arguments.length < 1) {
		return this; //nothing to curry;
	}

	var __method = this;
	var args = toArray(arguments);
	
	return function() {
		return __method.apply(this, args.concat(toArray(arguments)));
	}
}

var sum = function(a, b) {
	return a+b;
}

var composemessage = function(from, to, subject) {
	return "</br>From: "+from+"</br>"+"To: "+to+"</br>"+"Subject: "+subject+"</br>";
}

var sum10 = sum.curry(10);

var result = sum10(20);
thoppesJS.console.log("Curry result is "+result);

// var msg = composemessage("a@a.com", "b@b.com", "hi");
// thoppesJS.console.log("Composed Message:- "+msg);

var from = composemessage.curry("a@a.com");
var to = from.curry("b@b.com");
var sub = to("hi");
thoppesJS.console.log("Composed Message:- "+sub);

thoppesJS.console.log("********** end function_currying ********** </br>");