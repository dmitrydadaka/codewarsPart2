const consecutive = (arr, a, b) => arr.some((x, i) => x == a && (arr[i-1] == b || arr[i+1] == b))
function consecutive(arr, a, b) {
    return new RegExp(`${a},${b}|${b},${a}`).test(arr)
  }
  function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a)-arr.indexOf(b))==1
  }