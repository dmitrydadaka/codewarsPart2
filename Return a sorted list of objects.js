function sortList (sortBy, list) {
    return list.sort(function(a, b){
      return a[sortBy] < b[sortBy];  
    })
  }
  
  function sortList (sortBy, list) {
    return list.sort((x,y)=>y[sortBy]-x[sortBy])
  }