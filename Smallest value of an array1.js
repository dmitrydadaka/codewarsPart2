function min(arr, t) {
    return t=='index'?arr.indexOf(Math.min(...arr)):Math.min(...arr)
  }