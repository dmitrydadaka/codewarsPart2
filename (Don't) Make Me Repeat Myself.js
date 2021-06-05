String.prototype.repeat = function(count) {
    return [...Array(count)].fill(this).join(``);
  };
  
  String.prototype.repeat = function(count) {
   return Array(count+1).join(this)
  };
  
  String.prototype.repeat = function(count) {
    return Array.from({length:count},(_,i)=>this).join``
  };