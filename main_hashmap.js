thoppesJS.console.log("********** main_hashmap **********");

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

thoppesJS.console.log("********** end main_hashmap ********** </br>");