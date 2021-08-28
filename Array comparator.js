function matchArrays(v,r){
    return v.reduce((a,c,i)=>a+(r.some(x=>x==c)?1:0),0)
    }