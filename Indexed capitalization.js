function capitalize(s,arr){
    return s.replace(/./g,(x,i)=>arr.includes(i)?x.toUpperCase():x)
  };
  
  function capitalize(s,arr){
    return s.replace(/./g,(x,i)=>arr.some(x=>x==i)?x.toUpperCase():x)
  };
  