function roundToNext5(n){
    if (n % 5 === 0) {
      return n;
    }
    return roundToNext5(n + 1);
  }
  
  function roundToNext5(n){
    return Math.ceil(n/5)*5
  }
  
  function roundToNext5(n){ 
    while(n%5!=0){n++}
    return n
  }