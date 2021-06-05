const scale = (strng, k, n) =>
  strng.replace(/./g, `$&`.repeat(k)).replace(/.+/g, `$&\n`.repeat(n).trim());

const scale = (str, k, n) =>
  str
    .replace(/[^\n]/g,  c => Array(k + 1).join(c))
    .replace(/[^\n]+/g, c => Array(n + 1).join("\n" + c).slice(1));

function scale(s , k, n) {
    return !s?'':s.split('\n').map(x=>([...x].map(y=>y.repeat(k)).join``+'\n').repeat(n).slice(0,-1)).join`\n`
}