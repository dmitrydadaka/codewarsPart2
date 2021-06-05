function longest(words) {
    return words.reduce((a,c)=>Math.max(a,c.length),0)
  }
  
  function longest(words) {
    return words.sort((a,b)=>b.length-a.length)[0].length
  }