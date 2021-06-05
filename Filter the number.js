var FilterString = function(value) {
    return +value.replace(/\D/g,'')
  }
  var FilterString = function(value) {
    return value.replace(/[^0-9]/g,'')*1
  }