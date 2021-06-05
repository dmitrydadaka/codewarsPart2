function solution(n){
    return (k=>[(n/3^0)-k, (n/5^0)-k, k])(--n/15^0)
    }
    
    function solution(n){
      --n
    var n35=Math.floor(n/15)
    var n3=Math.floor(n/3)-n35
    var n5=Math.floor(n/5)-n35 
      return [n3,n5,n35] 
      }

    function solution(n){
    var a=Array.from(Array(n),(_,i)=>i)
    var b=[]
    var c=[]
    var d=[]
    a.map((x,i)=>x%3==0&&x%5!=0?
    b.push(x):x%5==0&&x%3!=0?c.push(x):
    x%5==0&&x%3==0?d.push(x):x)
      return [b.length,c.length, d.length-1]
      }