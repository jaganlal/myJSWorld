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

var myHashMap = new thoppesJS.CollectionClass.HashMap();
myHashMap.set('1k', '1v');
myHashMap.set('2k', '2v');
myHashMap.set('3k', '3v');
myHashMap.set('3k', '3v1');

myHashMap.remove('3k');
var v = myHashMap.get('2k');
thoppesJS.console.log("v is "+v);

v = myHashMap.get('3k');
thoppesJS.console.log("v is "+v);

myHashMap.showAll();

var map = new HashMap();

map.set("some_key", "some value");
map.get("some_key"); // --> "some value"

map.remove("some_key");

map.set("1", "string one");
map.set(1, "number one");
map.get("1"); // --> "string one"

var key = {};
var key2 = {};
map.set(key, 123);
map.set(key2, 321);
map.get(key); // --> 123

map.set(1, "test 1");
map.set(2, "test 2");
map.set(3, "test 3");

map.set(new Date, 'md');

map.forEach(function(value, key) {
  console.log(key + " : " + value);
});