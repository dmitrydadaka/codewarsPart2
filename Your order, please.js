function order(string){
    // ...
    return string.split(' ').reduce((acc,el,i) => {   
      acc[el.match(/\d/)-1]=el
      return acc;
    },[]).join(' ')
    
    
    
    
  }
  
  function order(words){
    
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }    
  
  function order(w){
  return  w.split(' ').sort((a,b)=>
          a.replace(/[^1-9]/gi,'')-b.replace(/[^1-9]/gi,'')).join` `
  }  