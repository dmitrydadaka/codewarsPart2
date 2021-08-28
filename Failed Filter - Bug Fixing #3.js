var FilterNumbers = function(str) {
    return str.split('').filter(c => isNaN(c)).join('');
  }
  
  var FilterNumbers = function(str) {
    return str.replace(/\d/g,'')
  }