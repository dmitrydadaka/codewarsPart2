differenceOfSquares=x=>x*(x*x-1)*(3*x+2)/12

function differenceOfSquares(x){
  return Math.pow((x*(x+1)/2), 2) - (x*(x+1)*(2*x+1)/6);
}

function differenceOfSquares(n){
  return (n*(n+1)/2)**2-Array.from(Array(n),(_,i)=>(i+1)**2).reduce((a,c)=>a+c,0)
}