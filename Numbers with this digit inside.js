function numbersWithDigitInside(x, d) {
    return [...Array(x)].reduce((a,c,i)=>new RegExp(d).test(++i)?[++a[0],a[1]+i,(a[2]||1)*i]:a,[0,0,0])
    }
  
  function numbersWithDigitInside(x, d) {
    for (var dd=d+'',s=c=0,p=1,i=1;i<=x;i++) if ((i+'').indexOf(dd)>=0) {c+=1; s+=i; p*=i}
    return [c,s,c==0?0:p];
  }
  
  numbersWithDigitInside=(x,d)=>
      (ar=[],dg=[...Array(x+1).keys()].slice(1).filter(t=>(""+t).includes(""+d)),
             [dg.length,dg[0]?dg.reduce((x,y)=>x+y):0,dg[0]?dg.reduce((x,y)=>x*y):0])
  
  const numbersWithDigitInside = (x, d) =>
    [...Array(x)].reduce((pre, _, idx) => new RegExp(d).test(++idx) ? [++pre[0], pre[1] + idx, (pre[2] || 1) * idx] : pre, [0, 0, 0]);
  
  function numbersWithDigitInside(x, d) {
    let a =[]
    for(i=1;i<x+1;i++){
   if((i+'').includes(d)) a.push(i) }
    return a.length==0?[0,0,0]:[a.length, a.reduce((a,c)=>a+c,0),a.reduce((a,c)=>a*c,1)]
  }