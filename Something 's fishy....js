function isTotal3() {
    var simpleVariable = 1;
    
    for (var index = 0; index < 1; index++)
      var variableInLoop = 1;
      
    (function defineAVariable() {
      this.variableInFunction = 1;
    })();
    
    var result = simpleVariable + variableInLoop + variableInFunction;
    
    return result;
  }
  
  function isTotal3() {
    var simpleVariable = 1;
    
    for (var index = 0; index < 1; index++)
      var variableInLoop = 1;
      
    (function defineAVariable() {
      variableInFunction = 1;
    })();
    
    var result = simpleVariable + variableInLoop + variableInFunction;
    
    return result;
  }
  
  function isTotal3() {
    var simpleVariable = 1;
    variableInFunction=0
    variableInLoop=0
    for (var index = 0; index < 1; index++)
      variableInLoop = 1;
      
    (function defineAVariable() {
      variableInFunction = 1;
    })();
    
    var result = simpleVariable + variableInLoop + variableInFunction;
    
    return result;
  }