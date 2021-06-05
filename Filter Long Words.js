function filterLongWords(sentence, n) {
    let words = sentence.split(' ');
    let longWords = [];
    
    for (let word of words) {
      if (word.length > n) {
        longWords.push(word);
      }
    }
    return longWords;
  }
  
  function filterLongWords(s, n) {
    return s.split(' ').filter(x=>x.length>n)
  }