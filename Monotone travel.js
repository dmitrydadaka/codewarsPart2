const isMonotone = arr =>
  !arr.some((val, idx) => val < arr[--idx]);

var isMonotone = function(arr){
  return arr.slice(0,-1).every((x,i)=>x<=arr[i+1])
}