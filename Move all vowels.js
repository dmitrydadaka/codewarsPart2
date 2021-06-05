function moveVowel(input) {
    var vow = input.match(/[aeiou]/gi) || [];
    var conso = input.match(/[^aeiou]/gi) || [];
    return conso.concat(vow).join('')
}

function moveVowel(i) {
return i.replace(/[aoiue]/gi,'')
  +i.replace(/[^aoiue]/gi, '')
}