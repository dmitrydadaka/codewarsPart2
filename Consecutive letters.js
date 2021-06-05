function solve(s){
    return new RegExp(s.split('').sort().join``).test('abcdefghijklmnopqrstuvwxyz')
}
function solve(s){
    return [...s].sort().every((x,i,_)=>i==0||x.charCodeAt()-_[i-1].charCodeAt()==1)
}

function solve(s){
  return "abcdefghijklmnopqrstuvwxyz".includes([...s].sort().join``)
}

function solve(s) {
return 'abcdefghijklmnopqrstuvwxyz'.includes(s.toString().split('').sort().join``)
}

function solve(s){
  if(s=='')return false
  const a=s.split('').sort().map(x=>x.charCodeAt())
  return a.map((e,i)=>Math.abs(e-a[i+1])).slice(0,-1).reduce((a,b)=>a+b,0)+1==s.length
}