function sortItOut(array){
    return array.sort( (a, b) => a & 1 ? b & 1 ? a-b : -1 : b & 1 ? 1 : b-a )
  }
  
  function sortItOut(array) {
    return array.sort((a, b) => ~~a % 2 === ~~b % 2 ? (~~b % 2 ? 1 : -1) * (a - b) : ~~b % 2 - ~~a % 2)
  }
  
  function sortItOut(array){
  return  array.filter(x=>~~x%2).sort((a,b)=>a-b).concat(array.filter(x=>~~x%2==0).sort((a,b)=>b-a))
  }