function reverseByCenter(s){
    return s.length%2?s.slice(-~~(s.length/2))+s[~~(s.length/2)]+s.slice(0,~~(s.length/2)):s.slice(-s.length/2)+s.slice(0,s.length/2)
  }