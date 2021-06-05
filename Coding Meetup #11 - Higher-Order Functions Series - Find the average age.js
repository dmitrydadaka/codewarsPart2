function getAverageAge(list) {
    return Math.round(list.reduce((a,b)=>a+b.age,0)/list.length)
     }
    
    function getAverageAge(list) {
    return Math.round(list.map(x=>x.age).reduce((a,b)=>a+b,0)/list.map(x=>x.age).length)
    }