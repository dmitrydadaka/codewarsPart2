function containAllRots(str, arr) {
    return [...str].map((x,i)=>str.slice(i)+str.slice(0,i)).every(x=>arr.includes(x))
}

function containAllRots(g, arr) {
   for(i=0;i<g.length;i++){
     if(!arr.includes(g.slice(i)+g.slice(0,i)))return false    
}
  return true
}

function containAllRots(g, arr) {
  let a=[]
   for(i=0;i<g.length;i++){
     g=g.slice(-1)+g.slice(0,-1)
     a.push(g)
     }
  return a.every(x=>arr.includes(x))
}