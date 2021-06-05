function mygcd(x,y){
    return y?mygcd(y,x%y):x
  }
  
  function mygcd(x,y){
    return y==0?x:mygcd(y,x%y)
  }
  
  function mygcd(x,y){
    if (!y) {
      return x
    }
  
    return mygcd(y, x % y)
  
  }