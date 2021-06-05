var flatten = function (array){
    return Array.prototype.concat.apply([],array);
  }
  
  var flatten = function (array){
    return [].concat(...array)
  }