(function() {
  // 'use strict';

  + function() { thoppesJS.console.log("********** start closures with timeout **********"); }()

  var mylist = ["delay", "this", "string", "in", "a", "timeout"];

  function echo(val) {
    thoppesJS.console.log(val);
  }

  for(var i=0; i<mylist.length; i++) {
    var d = (function(j) {
      echo(mylist[j]);
    }(i));
    setTimeout(d, 10);
  }

  + function() { thoppesJS.console.log("********** end closures with timeout **********"); }()
}());