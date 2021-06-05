String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g,x=>x.toUpperCase())
    };
    
    String.prototype.toJadenCase = function () {
      return this.split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ')}
    
    String.prototype.toJadenCase = function () {
      return this.replace(/\w+/g,x=>x[0].toUpperCase()+x.slice(1)).split('').map((x,i,_)=>x==x.toUpperCase()&&_[i-1]=='\''?x.toLowerCase():x).join``
    };