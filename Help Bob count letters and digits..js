function countLettersAndDigits(input) {
    return input.replace(/[^a-z\d]/gi,'').length
  }
  
  function countLettersAndDigits(input) {
    return input.replace(/[\W_]/gi,'').length
  }
  
  function countLettersAndDigits(input) {
    return input.replace(/[^a-z0-9]/gi,'').length
  }