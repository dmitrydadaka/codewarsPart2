halvingSum=h=g=>g&&g+h(g>>1)
//x >> 1 === floor(toInt(x) / 2)
halvingSum=h=g=>g&&g+h(g>>1)
    //halvingSum=H=Q=>Q&&Q+H(Q>>1)


function halvingSum(n) {
  return n*2-eval([...n.toString(2)].join`+`)
}

function halvingSum(n) {
  return n>1?n+halvingSum(Math.floor(n/2)):n  
}
function halvingSum(n) {
    if(n==1)return n
  return n+halvingSum(Math.floor(n/2))
}

function halvingSum(n) {
  let i=1
    while(n>1){
      i+=n
      n=Math.floor(n/2)  
    }
  return i
}