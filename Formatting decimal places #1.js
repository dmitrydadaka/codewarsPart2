function twoDecimalPlaces(number) {
    return parseInt(number * 100) / 100
  }
  
  function twoDecimalPlaces(number) {
    return +number.toFixed(5).slice(0, -3);
  }
  
  function twoDecimalPlaces(number) {
    return +(number+'').split('.').map((x,i)=>i==1?x.slice(0,2):x).join`.`
  }