+ function() { thoppesJS.console.log("********** start Revealing Module Pattern **********"); }()

var Customer = (function() {
  function construct(name) {
    this.name = name;
    thoppesJS.console.log('Customer');
  };

  construct.prototype = {
    /*
    * The one disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, 
    * so we have to set it manually. 
    * Else the result will be something like this - function Object() { [native code] }
    * Hence this line:
    */
    constructor: construct,
    greet: function() {
      thoppesJS.console.log(this.name + ' says Hi!!!');
    }
  }

  return construct;
})();

var VipCustomer = (function() {
  function construct(name, offer) {
    Customer.call(this, name);
    this.offer = offer;
    thoppesJS.console.log('VipCustomer');
  };

  construct.prototype = Object.create(Customer.prototype);
  construct.prototype.constructor = construct;
  construct.prototype.showOffers = function() {
    thoppesJS.console.log('My offers are: '+this.offer);
  }

  return construct;
})();

var c1 = new Customer('Jagan');
c1.greet();

var vc1 = new VipCustomer('Lal', 'Unlimited Calls');
vc1.greet();
vc1.showOffers();


thoppesJS.console.log("********** end Revealing Module Pattern ********** </br>");
