function flyBy(l, d){
    return l.replace(/./g, (x,i)=>i<d.length?'o':x)
    }
    
    function flyBy(l,d){
    return [...l].fill('o',0,d.length).join('')
    }
    
    function flyBy(l, d){
    return d.length<l.length?'o'.repeat(d.length)+l.slice(d.length):'o'.repeat(l.length)
    }