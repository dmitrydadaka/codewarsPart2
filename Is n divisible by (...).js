function isDivisible(x,...y){
    return y.every(z=>!(x%z))
  }
  
  function isDivisible(...args){
    return args.slice(1).every(x=>args[0]%x==0)
  }