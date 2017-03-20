// http://clarkfeusier.com/2015/01/16/interview-question-balanced-parentheses-stack.html

var balancedParens = function(str) {
  var stack = [];
  var open = { '{': '}', '[': ']', '(': ')' };
  var closed = { '}': true, ']': true, ')': true };
  
  for (var i = 0; i < str.length; i ++) {
    var chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } 
    else if (closed[chr]) {
      if (open[stack.pop()] !== chr) {
        return -1;
      }
    }
  }
  
  return stack.length === 0;
};

balancedParens('[({({[]})})]');   // true
balancedParens('(');  // false
balancedParens('()'); // true
balancedParens(')(');  // false
balancedParens('(())');  // true
balancedParens('[](){}'); // true
balancedParens('[(]{)}'); // false
balancedParens('var supYo  = { hey: dog() }'); // true
balancedParens('var fiddle = function() { doggy.eat();'); // false

/*
IsBalanced = function(Input) {
  // Your code goes here
  var parenList = [];
  var openParens = { '{': '}', '[': ']', '(': ')' };
  var closedParens = { '}': true, ']': true, ')': true };
  
  var c, temp, str;
  var resultList = [];
  var loopExit;
  
  for(var i=0; i<Input.length; i++) {
      loopExit = false;
      str =  Input[i];
      
      for(var j=0; j<str.length; j++) {
          c = str[j];
          
          if(openParens[c]) {
              parenList.push(c);
          } else if(closedParens[c]) {
              if(openParens[parenList.pop()] !== c) {
                  resultList.push('False');
                  loopExit = true;
              }
          }
          else {
              resultList.push('Invalid');
              loopExit = true;
          }
      }
      
      if(!loopExit) {
          if(parenList.length === 0) {
              resultList.push('True')
          }
          else {
              resultList.push('False');
          }
      }
  }
  
  return resultList;
  
};

IsBalanced([ "{]", "{{", ")(" ]);
*/