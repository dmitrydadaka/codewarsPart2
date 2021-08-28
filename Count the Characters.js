const countChar = (string, char) =>
  --string.split(new RegExp(char, `i`)).length;

function countChar(string, char) {
  return (string.match(RegExp(char,'gi'))||[]).length
}

function countChar(string, char) {
 return string.split('').filter(x=>x==char.toLowerCase()||x==char.toUpperCase()).length
}