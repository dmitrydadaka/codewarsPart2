function area(d, l) {
    return Math.round(l * Math.sqrt(d*d - l*l) * 1e2) / 1e2 || 'Not a rectangle';
  }
  
  function area(d,l){
    if(!d) return 'Not a rectangle'
  
    return d>=l? (Math.sqrt(d**2-l**2)*l)
    .toFixed(2)*1:'Not a rectangle'
  }