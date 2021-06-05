const maxProduct = (numbers, size) =>
  numbers.sort((a, b) => b - a).reduce((pre, val, idx) => idx < size ? pre * val : pre);

function maxProduct(numbers, size){
  return numbers.sort((a,b)=>b-a).slice(0,size).reduce((a,c)=>a*c,1)
}