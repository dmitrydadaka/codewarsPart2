var capitals = function (w) {  
    return [...w].reduce((x,y,i)=> y.toUpperCase()==y?x.concat(i):x,[])
  };
  
  var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };
  
  var capitals = function (word) {
    return [...word].map((x,i,_)=>x.toUpperCase()==x?_.indexOf(x):null).filter(x=>typeof x=='number')
  }