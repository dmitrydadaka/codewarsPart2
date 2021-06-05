function sumFromString(str) {
    return (str.match(/\d+/g) || []).reduce((a, b) => a + +b, 0)
  }
  
  function sumFromString(str){
    return str.split(/\D+/g)
      .reduce((a,b)=>a+ +b, 0)
  }