const dontGiveMeFive=(s,e)=>[...Array(e-s+1)].reduce((r,_,n)=>r+!/5/.test(n+s),0)

function dontGiveMeFive(start, end)
{
  return Array.from(Array(end-start+1),(_,i)=>i+start).filter(x=>!(x+'').includes('5')).length
}