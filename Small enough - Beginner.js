const smallEnough = (a, l) => !a.filter(v=>v>l).length

function smallEnough(a, limit){
return Math.max(...a)<=limit
}

function smallEnough(a, limit){
return a.every(x=>x<=limit)
}