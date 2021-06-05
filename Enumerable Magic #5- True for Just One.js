function one(arr, fun){
    let oneFound = false;
    const oneTrue = item => fun(item) ? (oneFound ? false : (oneFound = true)) : true;
    
    return arr.every(oneTrue) && oneFound;
  }
  
  
  function one(arr, fun){
    return arr.filter(fun).length==1
  }