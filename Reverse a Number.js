const reverseNumber = n => +(''+n).replace(/(-?)(\d+)/,(a,b,c)=> b+c.split('').reverse().join(''));

function reverseNumber(n) {
  return Math.abs(n).toString().split('').reverse().join``*Math.sign(n*1)
}
function reverseNumber(n) {
  return n>0?n.toString().split('').reverse().join``*1:-n.toString().split('').slice(1).reverse().join``*1
}