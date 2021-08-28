function sumOfIntegersInString(s){
    return (s.match(/\d+/g)||[]).reduce((a,c)=>a+ +c,0)// what the function name says
  }
  
  function sumOfIntegersInString(s){
    return s.split(/[^0-9]+/g).reduce((a,c)=>a+ + c,0)
  }