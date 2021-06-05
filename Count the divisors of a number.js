const getDivisorsCnt = n =>
  [...Array(n / 2 ^ 0)].reduce((pre, _, idx) => n % ++idx ? pre : ++pre, 1);

function getDivisorsCnt(n){
    return Array.from(Array(Math.floor(n/2)),(_,i)=>i+1).filter(x=>n%x==0).length+1
}

function getDivisorsCnt(n){
  var a=[]
    for(let i=1;i<=n;i++){
      if(n%i==0)a++
    }
  return a
}