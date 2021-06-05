const ArithmeticSequenceSum = (a, r, n) => a * n + r * n * (n - 1) / 2;

function ArithmeticSequenceSum(a, r, n) {
  
  return [...Array(n)].reduce((p,c,i)=>p+(a+i*r),0)
}