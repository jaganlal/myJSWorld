+ function() { thoppesJS.console.log("********** start closures **********"); }()

function outer() {
  var counter = 0;

  function inner() {
    thoppesJS.console.log("Couter value is " + counter);
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


thoppesJS.console.log("</br>********** celebrity ids **********");
function celebrityIDCreator(theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]["id"] = function(j) { // the j parametric variable is the i passed in on invocation of this IIFE​
      return function() {
        return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array​
      }() // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.​
    }(i); // immediately invoke the function passing the i variable as a parameter​
  }
  return theCelebrities;
}

var actionCelebs = [{name: "Stallone", id: 0}, {name: "Cruise", id: 0}, {name: "Willis", id: 0}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionCelebs[0];
thoppesJS.console.log(JSON.stringify(actionCelebs));


thoppesJS.console.log("********** end closures ********** </br>");
