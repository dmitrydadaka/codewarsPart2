const reverseLetter = str => 
  str.match(/[a-z]/gi).reverse().join(``)
  function reverseLetter(str) {
    return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
  }
  function reverseLetter(str) {
    return str.replace(/[^a-z]/gi,'').split``.reverse().join``  
  }