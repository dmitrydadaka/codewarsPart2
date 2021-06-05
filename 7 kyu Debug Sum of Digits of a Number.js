function getSumOfDigits(r) {
    return [...r+''].reduce((a,b)=>a+ +b,0)
  }
  
  function getSumOfDigits(integer) {
    var sum =0
    var digits =  String(integer)
    for(var ix = 0; ix < digits.length; ix++) {
      sum +=+digits[ix];
    }
    return sum;
  }