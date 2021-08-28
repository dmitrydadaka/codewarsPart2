function orderFood(list) {
    return list.reduce((a,c)=>(a[c.meal]=(a[c.meal]||0)+1,a),{})
  }
  
  function orderFood(list) {
    return list.reduce((a,c)=>{a[c.meal]?a[c.meal]++:a[c.meal]=1
                               return a},{})
  }