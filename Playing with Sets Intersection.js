function inter(s1, s2){
    return new Set([...s1].filter(e=>s2.has(e)))
  }
  
  function inter(s1, s2){
    return new Set([...s1].filter(e=>[...s2].some(c=>c==e)))
  }