const last = (...list) => (last => last[last.length - 1] || last)(list[list.length - 1]);

function last(...args){
return [...args].slice(-1)[0].length>0?
  ([...args].slice(-1)[0]).slice(-1)[0]:
  [...args].slice(-1)[0]
  }