function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }
  
  function findNextSquare(sq) {
    return Math.sqrt(sq)%1==0?(Math.sqrt(sq)+1)**2:-1
  }