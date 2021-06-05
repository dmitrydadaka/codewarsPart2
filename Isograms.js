function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }
  
  function isIsogram(str){
    return [...new Set(str.toLowerCase())].join``==str.toLowerCase()
  }