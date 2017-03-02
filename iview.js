(function() {
  'use strict';

  + function() { thoppesJS.console.log("********** start iview **********"); }()

  + function() { thoppesJS.console.log("********** 1 **********"); }()
  function foo1() {
    return {
      bar: 'hello'
    };
  };

  function foo2() {
    return 
    {
      bar: 'hello'
    };
  };

  thoppesJS.console.log(JSON.stringify(foo1()));
  thoppesJS.console.log(JSON.stringify(foo2()));
  thoppesJS.console.log(0.1 + 0.2);

  + function() { thoppesJS.console.log("********** 2. isInteger **********"); }()
  function isInteger(x) { 
    return (x^0) === x; 
  }

  thoppesJS.console.log(isInteger(10));
  thoppesJS.console.log(isInteger(3));
  thoppesJS.console.log(isInteger('3'));

  + function() { thoppesJS.console.log("********** 3. isPalindrome **********"); }()
  function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    var s1 = str.split('');
    var s2 = s1.reverse();
    var s3 = s2.join('');
    var bFlag = (str == str.split('').reverse().join(''));

    str = 'hi';

    return bFlag;
  }

  thoppesJS.console.log("isPalindrome('level'): "+isPalindrome('level'));
  thoppesJS.console.log("isPalindrome('levels'): "+isPalindrome('levels'));

  + function() { thoppesJS.console.log("********** 4. isEqual **********"); }()
  function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
  }

  var a1 = [5, 4, 1];
  var a2 = [5, 4, 1];
  var a3 = [4, 2, 3];
  var a4 = [1, 4, 5];

  thoppesJS.console.log("isEqual(a1, a2): "+isEqual(a1, a2));
  thoppesJS.console.log("isEqual(a1, a3): "+isEqual(a1, a3));
  thoppesJS.console.log("isEqual(a1, a4): "+isEqual(a1, a4));

  + function() { thoppesJS.console.log("********** 5. isTwoPassed **********"); }()
  function isTwoPassed(){
    var args = Array.prototype.slice.call(arguments);
    return args.indexOf(2) != -1;
  }

  thoppesJS.console.log("isTwoPassed(1,4): "+isTwoPassed(1,4));
  thoppesJS.console.log("isTwoPassed(5,3,1,2): "+isTwoPassed(5,3,1,2));


  + function() { thoppesJS.console.log("********** 6. getMax **********"); }()
  function getMax(arr){
    return Math.max.apply(null, arr);  
  }

  thoppesJS.console.log("getMax([22, 1, 33]): "+getMax([22, 1, 33]));


  + function() { thoppesJS.console.log("********** 7. call/apply **********"); }()
  var me = {
    firstname: 'Jaganlal',
    lastname: 'Thoppe', 
    getFullName: function(sep) {
      return this.firstname+(sep || ' ')+this.lastname;
    }
  }

  thoppesJS.console.log("me.getFullName(): "+me.getFullName());

  var son = {
    firstname: 'Adhviklal', 
    lastname: 'Thoppe'
  }

  thoppesJS.console.log("son.getFullName(): "+me.getFullName.call(son, '-'));

  var daughter = {
    firstname: 'Medhya', 
    lastname: 'Thoppe'
  }
  thoppesJS.console.log("daughter.getFullName(): "+me.getFullName.apply(daughter, ['.']));


  + function() { thoppesJS.console.log("********** 8. delete **********"); }()
  var myObject = {
    price: 20.99,
    get_price : function() {
        return this.price;
    }
  };
  var customObject = Object.create(myObject);
  customObject.price = 19.99;

  delete customObject.price;
  thoppesJS.console.log(customObject.get_price());


  + function() { thoppesJS.console.log("********** 9. curry **********"); }()
  function mul(a) {
    return function inner1(b) {
      return function inner2(c) {
        return a*b*c;
      }
    }
  }

  thoppesJS.console.log(mul(2)(4)(3));


  + function() { thoppesJS.console.log("********** 10. hoisting **********"); }()
  //foo3(); // Calling foo function here will give an Error
  var foo3 = function() { 
    thoppesJS.console.log("Hi I am inside Foo3");
  }; 

  bar();
  function bar() {
    thoppesJS.console.log("Hi I am inside Bar");
  }

  + function() { thoppesJS.console.log("********** 11. **********"); }()
  var DObj = function () { 
    this.DA = 10; 
    this.DB = 200;
    this.DC = function() {
      thoppesJS.console.log("Hi I am inside DC");
    };

    this.prototype = {
      p1: function() {
        thoppesJS.console.log("Hi I am inside DC");
      }, 
      p2: 100
    }
  };

  var dobj = new DObj();

  + function() { thoppesJS.console.log("********** 12. iife/void/+ **********"); }()
  + function iife() {
    var bar = function () {};
    var baz = function () {};
    var foo = function () {
        bar();
        baz();
     };
    var biz = function () {};

    foo();
    biz();
  }();

  + function() { thoppesJS.console.log("********** 13. Variable declaration **********"); }()

  function foo4(){ 
    thoppesJS.console.log("Hi I am inside foo4");
    return foo4;
  }
  var bar = new foo4();

  void function() {
    var a = b = 15;
    thoppesJS.console.log("Inside IFFY Value of a & b: "+a+" & "+b);
  }();

  thoppesJS.console.log("Outside IFFY Value of b: "+b);

  + function() { thoppesJS.console.log("********** 14. delete **********"); }()
  var a = { foo: 10, age: 20};
  delete a.foo;
  delete a.foo1;

  thoppesJS.console.log("a defined? " + (typeof a !== 'undefined'));
  thoppesJS.console.log("b defined? " + (typeof b !== 'undefined'));

  + function() { thoppesJS.console.log("********** 15. array/split/reverse **********"); }()
  var arr1 = "john".split('');
  var arr2 = arr1.reverse();
  var arr3 = "jones".split('');
  arr2.push(arr3);

  thoppesJS.console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
  thoppesJS.console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


  + function() { thoppesJS.console.log("********** 16. Object **********"); }()
  var a={},
    b={key:'b'},
    c={key:'c'};

  a[b]=123;
  a[c]=456;

  thoppesJS.console.log(a[b]);


  + function() { thoppesJS.console.log("********** 17. array indexOf **********"); }()
  var array1 = [10, 4, 3, 10, 15, 1, 1];
  var models = [];
  for(var i = 0; i < array1.length; i++) {
    if(array1.indexOf(array1[i]) === i) {
        models.push(array1[i]);
    }
  }

  + function() { thoppesJS.console.log("********** 18. my bind **********"); }()

  //put it part of Function prototype
  Function.prototype.bind = Function.prototype.bind || function(context) {
    var fn = this;

    return function() {
      fn.apply(context, arguments);
    }
  }

  var NVPair = function(n, v) {
    this.name = n;
    this.value = v;
  };

  var show = function() {
    thoppesJS.console.log(this.name + ' - ' + this.value);
  };

  var nvp1 = new NVPair('age', 40);
  show.bind(nvp1)();

  + function() { thoppesJS.console.log("********** 19. uniqueChars **********"); }()
  
  function uniqueChars(str) {
    var unique = '';
    str = str.toLowerCase();


    for (var i = 0; i < str.length; i++) {
      if (unique.indexOf(str.charAt(i)) == -1) {
        unique += str[i];
      }
    }

    return unique.length;
  }

  thoppesJS.console.log("uniqueChars('programming'): "+uniqueChars('programming'));
  thoppesJS.console.log("uniqueChars('test'): "+uniqueChars('test'));
  thoppesJS.console.log("uniqueChars('Test'): "+uniqueChars('Test'));

  + function() { thoppesJS.console.log("********** 20. String Reverse **********"); }()
  String.prototype.reverse = function() { 
    return (this.split('').reverse().join(''));
  }

  thoppesJS.console.log("'programming'.reverse(): "+'programming'.reverse());


  + function() { thoppesJS.console.log("********** 21. String Repeater **********"); }()
  String.prototype.repeater = function(count) { 
    var s = '';

    for(var i=0; i<count; i++) {
      s += this;
    }

    return s;
  }

  var mys = 'hello'.repeater(3);

  thoppesJS.console.log("'hello'.repeater(3): "+'hello'.repeater(3));

  + function() { thoppesJS.console.log("********** end iview **********"); }()
}());