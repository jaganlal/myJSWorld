(function() {
  'use strict';

  + function() { thoppesJS.console.log("********** start promises **********"); }()

  let firstMethod = function fm() {
    let promise = new Promise(function p(resolve, reject) {
      setTimeout(function sto() {
        thoppesJS.console.log('first method completed');
        resolve({data: 50});
      }, 2000);
    });

    return promise;
  };

  let secondMethod = function sm() {
    let promise = new Promise(function p(resolve, reject) {
      a.b = 10;
      setTimeout(function sto() {
        thoppesJS.console.log('second method completed');
        //resolve({data: 'secondMethod'});
        //reject({data: {error: 'secondMethod'}});
      }, 1000);
    });

    return promise;
  };

  let thirdMethod = function tm() {
    let promise = new Promise(function p(resolve, reject) {
      setTimeout(function sto() {
        thoppesJS.console.log('third method completed');
        resolve({data: 'thirdMethod'});
      }, 3000);
    });

    return promise;
  };

  let exceptionHandler = function eh(e) {
    thoppesJS.console.log('Exception in: '+e.message);
  }

  firstMethod()
    .then(secondMethod)
    .then(thirdMethod)
    .catch(exceptionHandler);

  + function() { thoppesJS.console.log("********** end promises **********"); }()
}());