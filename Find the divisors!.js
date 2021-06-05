divisors=i=>(v=>v.length?v:`${i} is prime`)(Array.from(Array(~~(i/2)),(_,v)=>2+v).filter(x=>i%x==0))

function divisors(integer) {
  var max = Math.floor(Math.sqrt(integer));
  var first = [], second = [];
  var ret = [];
  
  for(var i = 1; i <= max; i++) {
    if (integer % i === 0) {
      first.push(i);
      if (i * i != integer) {
        second.push(integer / i);
      }
    }
  }
  
  ret = first.concat(second.reverse());
  
  if (ret.length === 2) return `${integer} is prime`;
  return ret.splice(1, ret.length - 2);
};

function divisors(i) {
  return (v=>v.length?v:`${i} is prime`)(Array.from(Array(~~(i/2)-1),(_,v)=>2+v).filter(x=>i%x==0))
}
function divisors(i) {
  return Array.from(Array(~~(i/2)),(_,v)=>2+v).filter(x=>i%x==0).length>0?Array.from(Array(~~(i/2)),(_,v)=>2+v).filter(x=>i%x==0):`${i} is prime`
};