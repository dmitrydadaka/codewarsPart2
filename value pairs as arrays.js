function keysAndValues(data){
    return [Object.keys(data), Object.keys(data).map(function (key) { return data[key]; })];
  }
  
  function keysAndValues(data){
    return [Object.keys(data),
            Object.values(data)]
  }