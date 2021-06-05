const reverseAndMirror = (s1, s2) =>
  (fn => `${fn(s2)}@@@${fn(s1)}${[...fn(s1)].reverse().join(``)}`)
  (str => [...str].map(val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]()).reverse().join(``));
  

function reverseAndMirror(s1,s2) {
  s1 = [...s1].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
  s2 = [...s2].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join('')
  return `${s2}@@@${[...s1].reverse().join('')}${s1}`
}


const switchCase = char => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())

const withReverseMirror = string =>
  [...string]
    .reverse()
    .map(switchCase)
    .join('')

const withoutReverseMirror = string => [...string].map(switchCase).join('')

const reverseAndMirror = (s1, s2) => `${withReverseMirror(s2)}@@@${withReverseMirror(s1)}${withoutReverseMirror(s1)}`
