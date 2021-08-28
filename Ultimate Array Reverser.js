const ultimateReverse =s=>{
    return (a=>s.map(x=>a.splice(0,x.length).join``))([...s.join('')].reverse()) } 
  
  const ultimateReverse = s => {
  let a=[...s.join``].reverse().join``
  let b=[]
   for(let i=0;i<s.length;i++){
   b.push(a.slice(0,s[i].length))
   a=a.slice(s[i].length)     
    }
  return b  
  };