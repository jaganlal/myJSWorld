(function() {
  'use strict';

  + function() { thoppesJS.console.log("********** start promise_impl **********"); }()

  function MyPromise(cb) {
    var state = 'pending';
    var data;
    var deferred = null;

    function resolve(o) {
      if(o && typeof o.then === 'function') {
        o.then(resolve);

        return;
      }
    }
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
    .then(secondMethod)
    .then(thirdMethod)
    .then(logMethod)
    .catch(exceptionHandler);

  + function() { thoppesJS.console.log("********** end promise_impl **********"); }()
}());