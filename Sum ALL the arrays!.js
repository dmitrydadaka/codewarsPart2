const arraySum = (arr) => arr.reduce((p, c) => Array.isArray(c) ? arraySum(c) + p : isNaN(c) ? p : c + p, 0);

function arraySum(arr) {
  return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
}

function arraySum(arr) {
  return [].concat(...[].concat(...arr)).reduce((a,b)=>a+(typeof b=='number'?b:0),0)
}