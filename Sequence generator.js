const sequence = (n, pattern) =>
  [...Array(n)][typeof pattern === `function` ? `map` : `fill`](pattern);
function sequence(n, pattern) {
 return Array.from(Array(n), typeof pattern=='function'?pattern:(_)=>pattern)
}