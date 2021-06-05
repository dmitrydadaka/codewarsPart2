String.prototype.map = Array.prototype.map;

function makeBackronym(string) {
  return string.toUpperCase().map(function(char) {
    return dict[char];
  }).join(' ');
}

//preload variable: dict

var makeBackronym = function(string){
return  [...string.toUpperCase()].map(x=>dict[x]).join` `
};