function binaryArrayToNumber(arr) {
    return arr.reduce( (a, b) => a << 1 | b );
  }
  const binaryArrayToNumber = arr => {
    return parseInt(arr.join``,2)
  };