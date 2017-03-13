// https://miguelmota.com/bytes/array-balance-points/
/*
Write a function that takes an array of integers and returns the balance point. If no balance point is found, return -1.

The balance point of an array is the index in the array where the sum of the previous elements is equal to the sum of the following elements.

Where no previous or following elements exist for a specific index, then you can assume a sum of 0 for the missing elements.

For example:

A = [2, 7, 4, 5, -3, 8, 9, -1]

The balance point of A is 3

A[0] + A[1] + A[2] = 2 + 7 + 4 = 13

A[4] + A[5] + A[6] + A[7] = -3 + 8 + 9 + -1 = 13
*/
BalancePoint = function(input) {
  // Your code goes here
  if(!Array.isArray(input)) {
    return -1;
  }

  var totalSum = input.reduce(function(total, currentValue) { return total + currentValue; });
  var leftSum = 0, rightSum = 0;
  //execute once for each element
    for (var i=0; i<input.length; i++) { 
      totalSum -= input[i];
      if (leftSum === totalSum) { 
        return i;
      }
      leftSum += input[i];
    }

  // return input.reduce(function(point, current, i) {
  //   if(i > 0) {
  //     leftSum += input[i-1];
  //   }
  //   rightSum = totalSum - leftSum - current;

  //   if(leftSum === rightSum) {
  //     point = i;
  //   }

  //   return point;
  // }, []);

};

thoppesJS.console.log("BalancePoint([3, -2, 0, 4, 6, -5]): "+BalancePoint([3, -2, 0, 4, 6, -5]));

// thoppesJS.console.log("BalancePoint([ 2, 7, 4, 5, -3, 8, 9, -1 ]): "+BalancePoint([ 2, 7, 4, 5, -3, 8, 9, -1 ]));


