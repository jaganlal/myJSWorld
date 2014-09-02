thoppesJS.console.log("********** main **********");

var mySuperClass = new thoppesJS.classInheritance.superClass();
mySuperClass.myPrivilegedSuperFunction();
mySuperClass.increment();
mySuperClass.decrement();
mySuperClass.showSuperX();

var myChildClass1 = new thoppesJS.classInheritance.childClass('myChild1');
myChildClass1.increment();
myChildClass1.decrement();
myChildClass1.showSuperX();

var myChildClass2 = new thoppesJS.classInheritance.childClass('myChild2');
myChildClass2.increment();
myChildClass2.increment();
myChildClass2.increment();
myChildClass2.increment();
myChildClass2.decrement();
myChildClass2.showSuperX();


console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 12; // creates an own property 'a' on p
console.log(p.m()); // 13
// when p.m is called, 'this' refers to p.
// So when p inherits the function m of o, 'this.a' means p.a, the own property 'a' of p

/* IIFEs - http://designpepper.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html */

(function () {
  var foo = "IIFE";

  // Outputs: "IIFE"
  thoppesJS.console.log(foo);
})();


var a = 'IIFE with argument';

(function (arg) {
  var foo = "IIFE";

  // Outputs: "IIFE"
  thoppesJS.console.log(arg);
})(a);

thoppesJS.console.log("********** end main ********** </br>");