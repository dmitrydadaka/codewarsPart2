function decode(string) {
    return string.replace(/./g,x=>'5987604321'[x])
  }
  
  function decode(s) {
    return s.replace(/./g,x=>{return{'1':'9','2':'8','3':'7','4':'6','5':'0','6':'4','7':'3','8':'2','9':'1','0':'5'}[x]})
  }