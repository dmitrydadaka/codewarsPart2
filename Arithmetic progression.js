const arithmeticSequenceElements = (a, r, n) =>
  [...Array(n)].map((_, idx) => a + r * idx).join(`, `)

function arithmeticSequenceElements(a,r,n) {
  var ret = [a]
  while (--n) ret.push(a+=r);
  return ret.join(', ')
}

function arithmeticSequenceElements(a,r,n) {
  return Array.from({length:n},(_,i)=>a+i*r).join`, `
}