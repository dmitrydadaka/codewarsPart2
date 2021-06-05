reverse = function(array) {
    return array.reduceRight(function(a, v){ return a.push(v), a }, []);
  }
  
  reverse = function(a) {
    return a.reduce((a,b)=>[b].concat(a),[])
  }
  
  reverse = function(a) {
    var b=[]
    for(i=a.length-1;i>=0;i--){
      b.push(a[i])
      }
    return b
  }