function bump(x){
    return (x.match(RegExp('n','g'))||[]).length > 15 ? "Car Dead" : "Woohoo!";
  }
  
  function bump(x){
    return (x.match(new RegExp("n", "g"))||[]).length > 15 ? "Car Dead" : "Woohoo!";
  }
  
  function bump(x){
  return x.split('n').length>16?"Car Dead":"Woohoo!"
  }
  
  function bump(x){
  return x.replace(/_/g,'').length>15?"Car Dead":"Woohoo!"
  }