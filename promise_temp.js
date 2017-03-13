// http://www.mattgreer.org/articles/promises-in-wicked-detail/
function MyPromise(fn) {
  var state = 'pending';
  var value;
  var deferred = null;

  function resolve(newValue) {
    if (newValue && typeof newValue.then === 'function') {
      newValue.then(resolve);
      return;
    }
    value = newValue;
    state = 'resolved';

    if(deferred) {
      handle(deferred);
    }
  }

  function handle(handler) {
    if(state === 'pending') {
      deferred = handler;
      return;
    }

    if(!handler.onResolved) {
      handler.resolve(value);
      return;
    }

    var ret = handler.onResolved(value);
    handler.resolve(ret);
  }

  this.then = function(onResolved) {
    return new MyPromise(function(resolve) {
      handle({
        onResolved: onResolved,
        resolve: resolve
      });
    });
  };

  fn(resolve);
}

let firstMethod = () => {
    let promise = new MyPromise((resolve, reject) => {
      setTimeout(function sto() {
        thoppesJS.console.log('first method completed');
        resolve({data: 50});
      }, 1500);
    });

    return promise;
  };

  let secondMethod = (response) => {
    var response = response;
    var summedupdata = response.data+10;
    let promise = new MyPromise((resolve, reject) => {
      // a.b = 10;
      setTimeout(function sto() {
        thoppesJS.console.log('second method completed');
        resolve({data: summedupdata});
      }, 5000);
    });

    return promise;
  };

  let thirdMethod = (response) => {
    var summedupdata = response.data+20;
    let promise = new MyPromise((resolve, reject) => {
      setTimeout(function sto() {
        thoppesJS.console.log('third method completed');
        resolve({data: summedupdata});
      }, 3000);
    });

    return promise;
  };

  let logMethod = (response) => {
    thoppesJS.console.log(JSON.stringify(response));
  };

  let exceptionHandler = (e) => {
    thoppesJS.console.log('Exception in: '+e.message);
  }

  firstMethod()
    .then(secondMethod);
