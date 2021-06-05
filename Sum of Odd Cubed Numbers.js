function cubeOdd(arr) {
    return arr.every(x=>typeof x=='number')?arr.reduce((a,c)=>a+(c**3%2==0?0:c**3),0):undefined
  }