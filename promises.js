(function() {
  'use strict';

  + function() { thoppesJS.console.log("********** start promises **********"); }()

  let firstMethod = () => {
    let promise = new Promise((resolve, reject) => {
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
    let promise = new Promise((resolve, reject) => {
      // a.b = 10;
      setTimeout(function sto() {
        thoppesJS.console.log('second method completed');
        resolve({data: summedupdata});
        //reject({data: {error: 'secondMethod'}});
      }, 1000);
    });

    return promise;
  };

  let thirdMethod = (response) => {
    var summedupdata = response.data+20;
    let promise = new Promise((resolve, reject) => {
      setTimeout(function sto() {
        thoppesJS.console.log('third method completed');
        resolve({data: summedupdata});
      }, 1700);
    });

    return promise;
  };

  let genericErrorHandlerMethod = (e) => {
    thoppesJS.console.log('Error in: '+e.message);
  };

  let logMethod = (response) => {
    thoppesJS.console.log(JSON.stringify(response));
  };

  let exceptionHandler = (e) => {
    thoppesJS.console.log('Exception in: '+e.message);
  }

  firstMethod()
    .then(secondMethod, genericErrorHandlerMethod)
    .then(thirdMethod, genericErrorHandlerMethod)
    .then(logMethod, genericErrorHandlerMethod)
    .catch(exceptionHandler);

  //Different speed async operations
  let slow = new Promise((resolve) => {
    setTimeout(resolve, 3000, 'slow');
  });
  let instant = 'instant';
  let quick = new Promise((resolve) => {
    setTimeout(resolve, 2000, 'quick');
  });

  //The order is preserved regardless of what resolved first
  Promise.all([slow, instant, quick]).then((responses) => {
    responses.map(response => thoppesJS.console.log(response));
  });

  + function() { thoppesJS.console.log("********** end promises **********"); }()
}());