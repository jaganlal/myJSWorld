thoppesJS.console.log("********** call_apply_bind **********");

this.x = 10;

var myModule = {
  x: 100,

  getX: function() {
    return this.x;
  }
}

thoppesJS.console.log("Value of myModule.getX is "+myModule.getX());

var getX = myModule.getX;

thoppesJS.console.log("Value of getX is "+getX());
thoppesJS.console.log("Value of getX.call(myModule) is "+getX.call(myModule));

var boundedGetX = getX.bind(myModule);
thoppesJS.console.log("Value of boundedGetX is "+boundedGetX());

var calculator = {
  calculate: function() {
    var fn = Array.prototype.pop.apply(arguments);
    fn.apply(null, arguments);

    //to see how binding is working, uncomment this and find out
    // var fn = Array.prototype.pop;
    // fn = fn.bind(arguments);
    // var boundedMethod = fn();
    // boundedMethod.apply(null, arguments);
  }
}

function sum(x, y) {
  var result = x+y;

  thoppesJS.console.log("Sum of "+x+" & "+y+" is "+result);

  return result;
}

function diff(x, y) {
  var result = x-y;
  thoppesJS.console.log("Difference between "+x+" & "+y+" is "+result);
  return result
}

calculator.calculate(10, 5, sum);

thoppesJS.console.log("********** end call_apply_bind ********** </br>");