function isVow(a){
    var b=['a','o', 'i','u','e']
  return a.map(x=>b.includes(String.fromCharCode(x))?String.fromCharCode(x):x)
  }