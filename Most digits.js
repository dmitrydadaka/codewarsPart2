findLongest = arr => +(arr.sort((a,b) => (b+'').length - (a+'').length)[0]);
function findLongest(a){
  return a.reduce((a,c)=>(a+'').length<(c+'').length?c:a)
}

function findLongest(array){
  let a=array.map(x=>(x+'').split('').length)
  let b=a.indexOf(Math.max(...a))
  return array[b]
}