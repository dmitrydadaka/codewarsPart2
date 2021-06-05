function search(b, p) {
    return p.filter(x=>x<=b).sort((a,b)=>a-b).toString()
    }
    
    const search = (budget, prices) =>
      `${prices.filter(val => val <= budget).sort((a, b) => a - b)}`
    
    function search(b, p) {
    return p.filter(x=>x<=b).sort((a,b)=>a-b).join`,`
    }