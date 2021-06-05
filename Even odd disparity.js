let solve = a =>
a.filter(n => n % 2 === 0).length - a.filter(n => Math.abs(n % 2) === 1).length;
function solve(a){
    return a.reduce(((x, y) => Number.isInteger(y)
                     ? (y%2 === 0 ? x+1 : x-1) : x), 0);
  } 
  function solve(a){
    return a.filter(x=>typeof x=='number').reduce((x,y)=>x+(y%2==0?1:-1),0)
    
  };