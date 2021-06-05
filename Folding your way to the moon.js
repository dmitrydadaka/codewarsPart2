function foldTo(d) {
    let i = 0.0001, j = 0;
    while (i < d) i *= 2, j++;
    return d >= 0 ? j : null;
  }
  
  const foldTo = distance =>
    distance < 0 ? null : Math.max(Math.ceil(Math.log2(distance / 0.0001)), 0);
  
  function foldTo(d) {
     if (d < 0) return null
    let count = 0
    for (var i = 0.0001; i < d; i *= 2) count ++
    return count
  }