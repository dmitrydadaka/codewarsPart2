splitByValue=(k,a)=>a.sort((x,y)=>(k>y)-(k>x))
function splitByValue(k, e){
    return e.filter(x=>x<k).concat(e.filter(x=>x>=k))
}
function splitByValue(k, elements){
    var a=[]
    var b=[]
    elements.map(x=>x<k?a.push(x):b.push(x))
    return a.concat(b)
}