const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

var number = function(ps){
  return [].concat(...ps).reduce((a,c,i)=>a+(i%2?-c:c),0)
}