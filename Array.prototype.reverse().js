Array.prototype.reverse = function () {
    return (this.forEach((_, idx) => this.push(...this.splice(-(++idx), 1))), this)
  }
  
  
  
  Array.prototype.reverse = function() {
    var arr = this.splice(0);  
    
    while(arr.length) {
      this.push(arr.pop());
    }   
    
    return this;
  };
  