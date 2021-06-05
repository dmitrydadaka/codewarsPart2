const longestWord = a => a.split(' ').reduce((s,n)=> s.length > n.length ? s : n, '')
const longestWord = stringOfWords =>
  stringOfWords.split(` `).sort((a, b) => a.length - b.length).pop();

let longestWord = s => s.split(' ').reduceRight((a,b)=>(b.length>a.length) ? b : a);

function longestWord(s){
  return s.split(' ').reverse().filter(x=>x.length==Math.max(...s.split(' ').map(x=>x.length)))[0] 
}