var numbers = function() {
    return Array.prototype.filter.call(arguments, function(n) { return typeof n !== 'number'; }).length === 0;
  }
  
  numbers=(...x)=>x.every(x=>typeof x=='number')
  
  numbers=(...x)=>[...x].every(x=>typeof x=='number')