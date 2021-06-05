function caffeineBuzz(n){
    var str = "mocha_missing!";
    if(n%3==0){
      if(n%4==0){
        str = "Coffee";
      }else{
        str = "Java";
      }
      if(n%2==0){
        str = str + "Script";
      }
    }
    return str;
  }
  
  function caffeineBuzz(n){
    return (n%3==0) ? ((n%4==0) ? "Coffee" : "Java") + ((n%2==0) ? "Script" : "") : "mocha_missing!";
  }
  
  function caffeineBuzz(n){
  return n%12==0?'CoffeeScript':n%6==0?'JavaScript':n%3==0?'Java':'mocha_missing!'
  }
  
  function caffeineBuzz(n){
  return n%3==0&&n%4==0?'CoffeeScript':n%3==0&&n%2==0?'JavaScript':n%3==0?'Java':'mocha_missing!'
  }