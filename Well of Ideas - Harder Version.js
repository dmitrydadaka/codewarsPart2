function well(x){
    return (val => val ? val > 2 ? `I smell a series!` : `Publish!` : `Fail!`)
    ((`${x}`.match(/good/gi)||[]).length)
    }
    
    function well(x){
      var count = 0;
      x.forEach(function(arr) {
        arr.forEach(function(elem) {
          if(typeof(elem) === 'string' && elem.toLowerCase() === 'good') {
            count++;
          }
        });
      });
      if(count === 0) {
        return 'Fail!';
      }
      return count > 2 ? 'I smell a series!' : 'Publish!';
    }
    
    function well(x){
    return [].concat(...x.map(x=>x.filter(x=>/good/gi.test(x)))).length<1?'Fail!':
    [].concat(...x.map(x=>x.filter(x=>/good/gi.test(x)))).length<3?'Publish!':'I smell a series!'
    }