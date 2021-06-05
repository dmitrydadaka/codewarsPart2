function inAscOrder(arr) {
    return arr.slice(1).every((x,i)=>x>arr[i])
  }