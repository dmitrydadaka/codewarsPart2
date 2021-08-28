let SequenceSum = { showSequence : count=>count<=0?count==0?'0=0':`${count}<0`:`${[...Array(count + 1).keys()].join('+')} = ${[...Array(count + 1).keys()].reduce((x,y)=>x+y)}` }
var SequenceSum = {showSequence : n => n<0 ? n+'<0' : [...Array(n+1).keys()].join('+') + (n ? ' = ' : '=') + n*(n+1)/2}
class SequenceSum {
  static showSequence(n) {
    return n < 0
      ? `${n}<0`
      : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
  }
}

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count==0)return '0=0'
    if(count<0)return count+'<0'
    a=[...Array(count+1).keys()].reduce((a,c,i)=>a+i,0)
    return [...Array(count+1).keys()].join`+`+' = '+a
  };

  return SequenceSum;

})();