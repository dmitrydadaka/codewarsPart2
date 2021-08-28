function countVegetables(string){
    return ["cabbage", "carrot", "celery", "cucumber"
             , "mushroom", "onion", "pepper", "potato", "tofu", "turnip"].filter(x=>string.includes(x)).map(x=>[string.split(' ').filter(y=>y==x).length,x])
      .sort((a,b)=>b[0]==a[0]?b[1]>a[1]:b[0]-a[0])
   }
   
   function countVegetables(string){
    return ["cabbage", "carrot", "celery", "cucumber"
             , "mushroom", "onion", "pepper", "potato", "tofu", "turnip"].filter(x=>string.includes(x)).map(x=>[string.split(' ').filter(y=>y==x).length,x])
      .sort((a,b)=>b[0]==a[0]?b[1]>a[1]:b[0]-a[0])||[]
   }