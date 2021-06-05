const spam = String.prototype.repeat.bind`hue`

function spam(number){
  //TODO: Not returning the expected value.
  return Array(++number).join`hue`
}

function spam(number){
  //TODO: Not returning the expected value.
  return "hue".repeat(number)
}