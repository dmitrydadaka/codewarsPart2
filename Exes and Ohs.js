function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }
  
  function XO(str) {
      return str.replace(/x/gi,'').length==str.replace(/o/gi,'').length
  }
  
  function XO(str) {
      return str.replace(/[^x]/gi,'').length==str.replace(/[^o]/gi,'').length
  } 