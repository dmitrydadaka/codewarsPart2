function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
  };
  
  function capitalize(s){
    return [[...s].map((x,i)=>i%2?x.toLowerCase():x.toUpperCase()).join``,[...s].map((x,i)=>i%2?x.toUpperCase():x.toLowerCase()).join``]
  };