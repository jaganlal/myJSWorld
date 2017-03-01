void function() {
  + function() { thoppesJS.console.log("********** start debounce **********"); }()

  function debounce(cb, wait, immediate) {
    var timeout;

    return function() {
      var context = this, 
          args = arguments;

      var later = function() {
        timeout = null;
        if(!immediate) {
          cb.apply(context, args);
        }
      }

      var callNow = immediate && !timeout;
      clearTimeout(timeout);

      timeout = setTimeout(later, wait);
      if(callNow) {
        cb.apply(context, args);
      }
    }
  }

  var myEfficientFn = debounce(function() {
    thoppesJS.console.log("********** inside debounce **********");
  }, 250);

  window.addEventListener('resize', myEfficientFn);

  + function() { thoppesJS.console.log("********** end debounce **********"); }()
}();