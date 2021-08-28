const counterEffect = hitCount =>
  [...hitCount].map(val => [...Array(++val).keys()]);

function counterEffect(h) {
 return h.split('').map(x=>Array.from({length:+x+1},(_,i)=>i))
}