function getNiceNames(people){
    return people.reduce((a,c)=>c.wasNice?[...a, c.name]:a,[])
   }
   
   function getNaughtyNames(people){
    return people.reduce((a,c)=>c.wasNice?a:[...a, c.name],[])
   }
   
   function getNiceNames(p){
     return p.reduce(function(a,c){
       c.wasNice&&a.push(c.name)
       return a
     },[])
   }
   
   function getNaughtyNames(p){
      return p.reduce(function(a,c){
       !c.wasNice&&a.push(c.name)
       return a
     },[])
   }
   
   function getNiceNames(p){
     return p.filter(x=>x.wasNice).map(x=>x.name)
   }
   
   function getNaughtyNames(p){
     return p.filter(x=>!x.wasNice).map(x=>x.name)
   }