function reject(array, predicate) {
    return array.filter(x=>!predicate(x))
  }
  
  function reject(array, predicate) {
    return array.filter((x,i)=>!predicate(x))
  }