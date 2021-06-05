compare = (x, y) => (r = [x, y].map(a => (/[^A-Za-z]/g.test(a) ? '' : a || '').toUpperCase().split('').reduce((s, e) => s + e.charCodeAt(), 0)))[0] === r[1];
const compare = (s1, s2) =>
  (fn => fn(s1) === fn(s2))
  (str => [...!str || /[^A-Z]/i.test(str) ? `` : str.toUpperCase()].reduce((pre, val) => pre + val.charCodeAt(), 0));

function compare(s1, s2) {
return [...(s1==null?'':s1.replace(/[A-Z]/gi,'').length>0?'':s1.toUpperCase())]
  .reduce((a,c)=>a+c.charCodeAt(),0)==[...(s2==null?'':s2.replace(/[A-Z]/gi,'').length>0?'':s2.toUpperCase())].reduce((a,c)=>a+c.charCodeAt(),0)
}