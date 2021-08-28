function rakeGarden(garden) {
    return garden.replace(/(?!rock\b)\b\w+/g,'gravel')
  }
  
  function rakeGarden(garden) {
    return garden.replace(/\w+/g,x=>x=='rock'?'rock':'gravel')
  }