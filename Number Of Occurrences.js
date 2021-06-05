Array.prototype.numberOfOccurrences = function(needle) {
    return this.reduce((noo, value) => {
      return value === needle ? ++noo : noo;
    }, 0);
  }
  
  Array.prototype.numberOfOccurrences = function(_) {
  return this.filter(x=>x==_).length}