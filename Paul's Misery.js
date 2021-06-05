function paul(x){
    return  (score=>score < 40 ? 'Super happy!' : score < 70 ? 'Happy!' : score < 100 ? 'Sad!' : 'Miserable!')
      (x.map(x => ({ kata: 5, 'Petes kata': 10, life: 0, eating: 1 }[x])).reduce((p,c) => p+c,0))
    }
    
    paul = x => {
      const score = x.map(x => ({ kata: 5, 'Petes kata': 10, life: 0, eating: 1 }[x])).reduce((p,c) => p+c,0)
      return score < 40 ? 'Super happy!' : score < 70 ? 'Happy!' : score < 100 ? 'Sad!' : 'Miserable!'
    }
    
    function paul(x){
    return x.reduce((a,b)=>a+(b=='life'?0:b=='eating'?1:b=='kata'?5:10),0)<40?'Super happy!':
    x.reduce((a,b)=>a+(b=='life'?0:b=='eating'?1:b=='kata'?5:10),0)<70?'Happy!':
    x.reduce((a,b)=>a+(b=='life'?0:b=='eating'?1:b=='kata'?5:10),0)<100?'Sad!':'Miserable!'
    }