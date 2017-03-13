+ function() { thoppesJS.console.log("********** start Revealing Module Pattern **********"); }()

function Customer(name) {
  this.company = 'RedAnt';
  this.name = name;
}

Customer.prototype = {
  /*
  * The one disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, 
  * so we have to set it manually. 
  * Else the result will be something like this - function Object() { [native code] }
  * Hence this line:
  */
  constructor: Customer,
  greet: function() {
    thoppesJS.console.log(this.name + ' says Hi!!!');
  }
}


function VipCustomer(name, offer) {
  Customer.call(this, name);
  this.offer = offer;
}

VipCustomer.prototype = Object.create(Customer.prototype);
VipCustomer.prototype.constructor = VipCustomer;
VipCustomer.prototype.showOffers = function() {
  thoppesJS.console.log('My offers are: '+this.offer);
}

VipCustomer.prototype.greet = function() {
  Customer.prototype.greet.call(this);
  thoppesJS.console.log('My offers are: '+this.offer);
}
// thoppesJS.utils.extend(Customer, VipCustomer);

var c1 = new Customer('Jagan');
c1.greet();

var vc1 = new VipCustomer('Lal', 'Unlimited Calls');
vc1.greet();
vc1.showOffers();


thoppesJS.console.log("********** end Revealing Module Pattern ********** </br>");
