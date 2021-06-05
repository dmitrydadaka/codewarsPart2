function spread(func, args) {
    return func.apply(this, [...args])
  }
  
  function spread(func, args) {
    return func.apply(null, args)
  }
  
  function spread(func, args) {
    return func(...args)
  }