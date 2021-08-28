function sumOfABeach(beach) {
    return --beach.split(/sand|water|sun|fish/gi).length
  }
  
  function sumOfABeach(beach) {
    return (beach.match(/sun|water|fish|sand/gi)||[]).length
  }
  
  function sumOfABeach(beach) {
    return beach.replace(/sand|sun|water|fish/gi,'one').split('one').length-1
  }