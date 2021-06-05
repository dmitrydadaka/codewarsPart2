function cake(x, y){
    return [...y].reduce((a,c,i)=>a+(i%2==0?c.charCodeAt():c.charCodeAt()-96),0)>x/100*70?'Fire!':'That was close!'
    }
    
    function cake(x, y){
    return [...y].reduce((a,c,i)=>a+(i%2==0?c.charCodeAt():c.charCodeAt()-96),0)>~~(x/100*70)?'Fire!':'That was close!'
    }