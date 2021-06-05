const growingPlant = (u, d, dh)=> Math.max(1, Math.ceil((dh-d)/(u-d)));

function growingPlant(u, d, H) {
  return Math.max(Math.ceil((H-u)/(u-d)),0)+1
}

function growingPlant(d, o, t) {
  let count=1
  for(let i=d;i<t;i+=d){
    i-=o
    count++
    } 
  return count
}

function growingPlant(d, o, t) {
  let sum=0
  for(let i=1;i<t;i++){
    sum+=d
    if(sum>=t) return i
    sum-=o
    } 
}