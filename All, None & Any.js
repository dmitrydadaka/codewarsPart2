Array.prototype.all = function (p) {
    // TODO: Implement this function
    return null;
  };
  
  Array.prototype.none = function (p) {
    // TODO: Implement this function
    return null;
  };
  
  Array.prototype.any = function (p) {
    // TODO: Implement this function
    return null;
  };Array.prototype.all = function (p) {
    for (const x of this)
      if (!p(x))
        return false;
    return true;
  };
  
  Array.prototype.none = function (p) {
    for (const x of this)
      if (p(x))
        return false;
    return true;
  };
  
  Array.prototype.any = function (p) {
    return !this.none(p);
  };
  
  Array.prototype.all = function (p) {
    // TODO: Implement this function
    return null;
  };
  
  Array.prototype.none = function (p) {
    // TODO: Implement this function
    return null;
  };
  
  Array.prototype.any = function (p) {
    // TODO: Implement this function
    return null;
  };Array.prototype.all = function (p) {
    return this.reduce(function(res, i){
       return res && p(i);
    }, true);
  };
  
  Array.prototype.none = function (p) {
    return this.reduce(function(res, i){
       return res && !p(i);
    }, true);
  };
  
  Array.prototype.any = function (p) {
    return this.reduce(function(res, i){
       return res || p(i);
    }, false);
  };
  
  Array.prototype.all = function (p) {
    return this.filter(p).length==this.length
  };
  
  Array.prototype.none = function (p) {
    return this.filter(p)==0
  };
  
  Array.prototype.any = function (p) {
    return this.filter(p).length>0
  };