function myParseInt(str) {
    return /^\s*\d+\s*$/.test(str)?+str:NaN
  }
  function myParseInt(str) {
    return  str.trim().match(/\D/)?NaN:+str
  }