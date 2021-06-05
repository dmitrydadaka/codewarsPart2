const rangeBitCount = (a, b) =>
  [...Array(b - a + 1)].reduce((pre, _, idx) => pre + (idx + a).toString(2).replace(/0/g, ``).length, 0);

function rangeBitCount(a, b) {
  return Array.from({length:1+b-a},(_,i)=>(i+a).toString(2).replace(/[0]/g,'').length).reduce((a,b)=>a+b,0)
}