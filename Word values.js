function wordValue(a) {
    return a.map((s,i) => (i+1)*[...s].reduce((a,c) => a + c.charCodeAt(0)%32, 0))
  }
  const wordValue = a =>
  a.map((val, idx) => (val.match(/\w/g) || []).reduce((pre, val) => pre + val.charCodeAt() - 96, 0) * ++idx);
  function wordValue(a) {
    return a.map((s, i) => (i + 1) * s.split``.reduce((s, n) => s + 1 + 'abcdefghijklmnopqrstuvwxyz'.indexOf(n), 0));
  }
  function wordValue(a) {
    return a.map((s,i) => (i+1)*[...s].reduce((a,c) => a + (c.charCodeAt(0)-96==-64?0:c.charCodeAt(0)-96), 0))
  }
  function wordValue(a) {
    return a.map((x,i)=>x.split('').map(x=>x.charCodeAt()-96).filter(x=>x!=-64)
                 .reduce((x,y)=>x+y,0)*(i+1))
      
    }
    function wordValue(a) {
        const b=[...Array(26).keys()].map(x=>String.fromCharCode(x+97))
        return a.map((x,i)=>x.split('').map(x=>x.charCodeAt()-96).filter(x=>x!=-64)
                     .reduce((x,y)=>x+y,0)*(i+1))
          
        }