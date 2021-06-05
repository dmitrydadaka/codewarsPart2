solve=s=>Math.max(...s.match(/\d+/g))

function solve(s){
return Math.max(...s.split(/[a-z]/gi).map(x=>x=+x))
};