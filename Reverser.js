let reverse = n => +[...[]+n].reverse().join([])
function reverse(number) {

    var revNumber = 0;
  
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
  
    return revNumber;
  }