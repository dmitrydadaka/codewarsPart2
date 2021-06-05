/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/
const contentWeight = (bottleWeight, scale) =>
  (val => bottleWeight / (val + 1) * (scale.includes(`ll`) || val))
  (parseFloat(scale))
  
function contentWeight(bottleWeight, scale) {
  var s = parseInt(scale);
  return /larger/.test(scale) ? bottleWeight * s / (s+1) : bottleWeight / (s+1);
}

/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/
function contentWeight(b, s) {
return s.includes('larger')? b/(parseFloat(s)+1)*parseFloat(s):b/(parseFloat(s)+1)
}