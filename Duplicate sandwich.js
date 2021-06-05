function duplicateSandwich(a) {
    let set = new Set(), x;
    [...a].forEach((i, ind) => (set.add(i), set.size < ind + 1 && x === undefined && (x = i)))
    return a.slice(a.indexOf(x)+1, a.lastIndexOf(x))
  }
  
function duplicateSandwich(a) {
    for(let i = 0; i < a.length - 1; i++)
      if(a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
        return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
  }
  const duplicateSandwich = (list) => {
    let duplicated = [...list].find(a => list.indexOf(a) !== list.lastIndexOf(a))
    return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated))
  }
  function duplicateSandwich(a) {
    for(i=0;i<a.length;i++) {
           if( a.indexOf(a[i])===a.lastIndexOf(a[i])) continue
           else return  a.slice(a.indexOf(a[i])+1,a.lastIndexOf(a[i]))
      }
    }