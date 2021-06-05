function alternateCase(s) {
    return s.split('').map(function(el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    }).join('');
  }
  
  const alternateCase=x=>x.replace(/\w/g,  x=>
   x[`to${x<'a'?'Low':'Upp'}erCase`]())
  
  const alternateCase = s =>
    s.replace(/\w/g, val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]());
  
  function alternateCase(s) {
    return s.replace(/[a-z]/gi, x=>x.toUpperCase()==x?
                     x.toLowerCase():x.toUpperCase())
  }