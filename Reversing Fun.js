function flipNumber(n)
{
  if (n.length === 1)
    return n;
  
  n = n.split('').reverse().join('');
  return n[0] + flipNumber(n.substr(1));
}
const flipNumber = n => n.length < 2 ? n : n.slice(-1) + n[0] + flipNumber(n.slice(1, -1));

const flipNumber = n =>
  (arr => [...n].reduce(pre => pre + arr.reverse().shift(), ``))
  ([...n])
function flipNumber(n)
{
 for(i=0;i<n.length;i++){
   n=n.slice(0,i)+[...n.slice(i)].reverse().join``
 }
  return n
