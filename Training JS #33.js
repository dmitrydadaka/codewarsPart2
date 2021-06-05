function maxMin(arr1,arr2){
    return [Math.max(...arr1.map((x,i)=>Math.abs(x-arr2[i]))),
            Math.min(...arr1.map((x,i)=>Math.abs(x-arr2[i])))]
  }