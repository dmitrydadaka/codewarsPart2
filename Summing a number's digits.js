function sumDigits(n) {
    return [...String(Math.abs(n))].reduce((a,b)=>a+ +b,0)
  }
  
  function sumDigits(number) {
      var i = 0;
      var sum = 0;
      number = Math.abs(number)
      while(number != 0)
      {
          sum += number % 10
          number = Math.floor(number/10)
      }
      return sum
  }
  
  
  function sumDigits(n) {
    return Math.abs(n).toString().split('').reduce((a,b)=>a+ +b,0)
  }