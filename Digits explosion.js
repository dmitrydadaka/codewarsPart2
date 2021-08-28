function explode(s) {
    return s.replace(/\d/g,e=>e.repeat(+e))
  }
  
  function explode(s) {
    return [...s].map(e=>e.repeat(+e)).join``
  }