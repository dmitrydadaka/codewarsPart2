function sc(n){
    const b = n.toString(2);
    return [...Array.from({length: n}, (_, i) => i + 1)].filter(x => n % x == 0 && b.indexOf(x.toString(2)) >= 0);
  }
  
  function sc(n){
    a=[]
    for(i=1;i<=n;i++){
     if(n%i==0) a.push(i)
    }
    return a.filter(e=>n.toString(2).includes(e.toString(2)))
  }