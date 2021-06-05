function vowelStart(str) {
    return str.toLowerCase().replace(/[^a-z\d]/gi, '')
      .replace(/(.)(?=[aeiou])/g, '$& ')
  }
  
  function vowelStart(str){
    return str.toLowerCase().replace(/\W/g,"").split(/(?=[aeiou])/).join` `
  }
  
  function vowelStart(str){
  return str.split` `.join``.toLowerCase()
    .replace(/[^a-z0-9]/g,'').replace(/[aoiue]/g,' $&').trim()
  }