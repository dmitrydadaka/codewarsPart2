function swapVowelCase(str) {
    return str.replace(/[aoieu]/gi,x=>x==x.toUpperCase()?x.toLowerCase():x.toUpperCase())
  }