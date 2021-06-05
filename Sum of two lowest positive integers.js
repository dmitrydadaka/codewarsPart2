function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }

  const sumTwoSmallestNumbers = (s) => {
  return  s.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b,0)
  };