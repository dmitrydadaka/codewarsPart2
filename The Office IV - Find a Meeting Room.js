function meeting(x){
    return x.includes('O')?x.indexOf('O'):'None available!'
    }
    
    const meeting = (x, empty = x.indexOf('O')) => empty < 0 ? 'None available!' : empty;
    
    function meeting(x){
    return x.findIndex(x=>x=='O')>-1?x.findIndex(x=>x=='O'):"None available!"
    }