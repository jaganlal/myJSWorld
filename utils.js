var thoppesJS = thoppesJS || {};

thoppesJS.utils = {

  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance */
  extend: function(parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }, 

  //On older JavaScript engines without Object.create
  createObject: function(proto) {
      function ctor() { }
      ctor.prototype = proto.prototype;
      return new ctor();
  },

  inherit: function(parent, child) {
    var p = Object.create(parent);
    p.constructor = child;
    child.prototype = p;
  }, 

  inherits: function(parent, child) {
    function F() {}
    F.prototype = parent;
    child.prototype = new F();
  },

  inheritFrom: function(proto) {
    function F() {};
    F.prototype = proto;
    return new F();
  }
}