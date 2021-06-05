const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

function getMiddle(s)
{
  return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
}

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

function getMiddle(s)
{
 return s.substr(Math.ceil(s.length/2-1), s.length%2==0?2:1)
}

function getMiddle(s)
{
  var a=s.split('')
  while(a.length>2){a=a.slice(1,-1)}
  return a.join``
}