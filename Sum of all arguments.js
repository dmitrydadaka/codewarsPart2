function sum(...arguments) {
    return arguments.reduce((a,b,i)=>a+arguments[i],0)
  }
  
  function sum() { return [].reduce.call(arguments, function(s,v){ return s+v },0 ) }
  
  function sum() {
    return Object.values(arguments).reduce((a,b,i)=>a+arguments[i],0)
  }
  
  function sum() {
    return [...arguments].reduce((a,b,i)=>a+arguments[i],0)
  }

  function sum() {
    let sum=0
    for(i in arguments){
      sum+=arguments[i]}
    return sum
  }
  
  function sum() {
    let sum=0
    for(let i in arguments){
      sum+=arguments[i]}
    return sum
  }

  function sum(...k) {
    return [...k].reduce((a,b)=>a+b,0)
  }