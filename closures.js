+function() { thoppesJS.console.log("********** start closures **********"); } ()

function outer() {
	var counter = 0;
	function inner() {
		thoppesJS.console.log("Couter value is "+counter);
		counter++
	}

	return inner;
}

var v1 = outer();
v1(); //Couter value is 0
v1(); //Couter value is 1

var v2 = outer();
v2(); //Couter value is 0
v2(); //Couter value is 1
v2(); //Couter value is 2
v2(); //Couter value is 3

v1(); //Couter value is 2

thoppesJS.console.log("********** end closures ********** </br>");