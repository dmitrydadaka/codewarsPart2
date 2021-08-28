function sumOfN(n) {
    return [...Array(Math.abs(n))].reduce((a,c,i)=>[...a,a[i]+Math.sign(n)*++i],[0])
    };
    
    function sumOfN(n) {
      return Array.from(Array(Math.abs(n)+1),(_,i)=>Array.from(Array(i),(_,i)=>i+1).reduce((a,c)=>a+c,0)).map(c=>n>=0?c:c==0?c:-c)
    };