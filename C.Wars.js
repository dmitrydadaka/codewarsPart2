function initials(n){
    return n.replace(/\w+ /g, d=>d[0].toUpperCase()+'.').replace(/\w+$/g,e=>e[0].toUpperCase()+e.slice(1))
    }
    
    function initials(n){
    return n.split(' ').map((x,i,arr)=>x==arr[arr.length-1]?x[0].toUpperCase()+x.slice(1):x[0].toUpperCase()+'.').join``
    }