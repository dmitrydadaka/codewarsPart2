function seqlist(first, c, l) {
    for (var list = []; list.length < l; )
      list.push(first + c * list.length);
    return list;
  }
  
  const seqlist = (first, c, l) => Array.from({ length: l }, (_, id) => first + id * c);
  
  const seqlist = (first, c, l) =>
    [...Array(l)].map((_, idx) => idx * c + first);
  
  var seqlist = function(first,c,l){
  return Array.from(Array(l), (_,i)=>first+c*i)
  }