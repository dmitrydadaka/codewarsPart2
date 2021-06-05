function SeriesSum(n)
{
  for(var sum = 0, d = 1, i = 0; i < n; sum += 1/d, ++i, d+=3);
  return sum.toFixed(2);
}

function SeriesSum(n)
{
  for(a=0,i=1;i<=n*3;i+=3) a+=1/i;
  return a.toFixed(2);
}
function SeriesSum(n, s=0)
{
  return n? SeriesSum(n-1,s+1/(-2+n*3)):s.toFixed(2)
}
function SeriesSum(n)
{
  return [...Array(n)]
    .reduce((a,c,i)=>a+1/(1+i*3),0).toFixed(2)
}