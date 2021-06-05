function houseNumbersSum(inputArray) {
    return inputArray.slice(0, inputArray.indexOf(0)).reduce((s, v) => s+v, 0);
  }
  
  function houseNumbersSum(y) {
  return y.slice(0,y.findIndex(x=>x==0)).reduce((a,c)=>a+c,0)  
  }