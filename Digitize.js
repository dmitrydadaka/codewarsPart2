digitize=x=>Array.from(x+'', val=>Number(val))

function digitize(n) {
  var array = [];
  
  do {
    var number = n % 10;
    n = Math.floor(n / 10);
    
    array.unshift(number);
    
  } while(n > 0);
  
  return array;
  
}

function digitize(n) {
  return String(n).split('').map(Number);
}

function digitize(n) {
return [...(n+'')].map(Number)
}