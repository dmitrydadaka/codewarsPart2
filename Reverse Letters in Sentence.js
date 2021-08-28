function reverser(sentence) {
    return sentence.replace(/\S+/g, x=>[...x].reverse().join``) 
    }
    
    // reverse the letters in the sentence
    function reverser(sentence) {
      return sentence.split(' ').map(x=>[...x].reverse().join``).join` `
    }