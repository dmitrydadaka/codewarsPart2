function shorter_reverse_longer(a,b){
    return a.length<b.length?a+[...b].reverse().join``+a:b+[...a].reverse().join``+b
  }