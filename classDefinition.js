/* Class definition in JS */
/* inspired by: http://www.phpied.com/3-ways-to-define-a-javascript-class/ */

var thoppesJS = thoppesJS || {};

thoppesJS.classInheritance = {

  superClass: function() {

    if (!this)
      return new superClass();

    /* for deeper understanding on Public/Private Variables and Methods: http://phrogz.net/JS/classes/OOPinJS.html */
    var myPrivateCounter = 0;

    function myPrivateSuperFunction() {
      myPrivateCounter++;
      thoppesJS.console.log("Inside myPrivateSuperFunction where myPrivateCounter is "+myPrivateCounter);
    }

    this.name = "SuperClass";
    this.superX = 0;

    this.myPrivilegedSuperFunction = function() {
      myPrivateCounter++;
      thoppesJS.console.log("Inside myPrivilegedSuperFunction");
    }

    this.showSuperX = function() {
      thoppesJS.console.log("Value is superX is "+this.superX);
    }

    thoppesJS.console.log("Inside superClass ctor");
  },

  childClass: function(name) {
    if (!this)
      return new childClass();

    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance */

    // Call the parent constructor, making sure (using Function#call) that "this" is
    // set correctly during the call
    thoppesJS.classInheritance.superClass.call(this);
    this.name = name;
    thoppesJS.console.log("Inside childClass ctor with name = "+this.name);
  },
}

thoppesJS.classInheritance.superClass.prototype.increment = function() {
  this.superX++;
  thoppesJS.console.log("increment::This is "+this.name);
};

thoppesJS.classInheritance.superClass.prototype.decrement = function() {
  this.superX--;
  thoppesJS.console.log("decrement::This is "+this.name);
};

thoppesJS.classInheritance.superClass.prototype.myProtoVar1 = 1;
thoppesJS.classInheritance.superClass.myStaticVar1 = 100;

//extend it here - trick is inside extend method
thoppesJS.utils.extend(thoppesJS.classInheritance.superClass, thoppesJS.classInheritance.childClass);
//thoppesJS.classInheritance.childClass.prototype = thoppesJS.utils.createObject(thoppesJS.classInheritance.superClass);

//override decrement
thoppesJS.classInheritance.childClass.prototype.decrement = function() {
  this.superX -= 2;
  thoppesJS.console.log("childClass::decrement name is "+this.name);
};


/* no namespace - like singleton (no need to create instance) */
var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

var apple = new function() {
  this.type = "macintosh";
  this.color = "red";
  this.getInfo = function () {
    return this.color + ' ' + this.type + ' apple';
  };
}

function windowsPC (type) {
  this.type = type;
  this.color = "black";
}

windowsPC.prototype.getInfo = function() {
  return this.color + ' ' + this.type + ' PC';
};
