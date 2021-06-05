function addLetters(...letters) {
    return String.fromCharCode(letters.reduce((a,c)=>a+c.charCodeAt()-96,25)%26+97)
  }