function golfScoreCalculator(p, s){
    return [...s].reduce((a,c,i)=>a+(c-p[i]),0)
    }
    
    function golfScoreCalculator(p, s){
    return [...s].reduce((a,c,i)=>a+(c=+c-+p[i]),0)
    }