function inverseSlice(items, a, b) {
    return items.filter((x,i)=>i<a||i>=b)
  }
  
  function inverseSlice(items, a, b) {
    items.splice(a,b-a)
    return items
  }
  
  function inverseSlice(items, a, b) {
    return items.slice(0,a).concat(items.slice(b))
  }