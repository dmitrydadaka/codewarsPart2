const superSecretChars = [[`a`, `@`], [`s`, `$`], [`o`, `0`], [`h`, `5`], [`x`, `*`]];
const createSSP = password =>
  superSecretChars.reduce((pre, val) => pre.replace(new RegExp(val[0], `gi`), val[1]), password)

var S= {'a': '@','s': '$','o':'0', 'h':'5', 'x': '*'}
function createSSP(p){
  return p.replace(/[asohx]/gi,x=>S[x.toLowerCase()])
}