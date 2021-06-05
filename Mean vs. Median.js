const meanVsMedian = numbers =>
  (val => val > 0 ? `mean` : val ? `median` : `same`)
  (numbers.reduce((pre, val) => pre + val) / numbers.length - numbers.sort((a, b) => a - b)[numbers.length / 2 | 0]);

function meanVsMedian(n) {
   let a=n.sort((a,b)=>a-b)[Math.floor(n.length/2)]
   let b=n.reduce((a,b)=>a+b,0)/n.length
   return a>b?'median':b>a?'mean':'same'
}