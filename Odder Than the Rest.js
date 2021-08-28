function oddOne(arr) {
    return arr.findIndex(y=>y==Math.max(...arr.filter(x=>x%2)))
  }
  
  function oddOne(arr) {
    return arr.findIndex(x=>x%2)
  }