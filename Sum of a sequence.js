sequenceSum = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s);

const sequenceSum = (begin, end, step) => {
  let a=[]
  for(i=begin;i<=end;i+=step){
    a.push(i)
  }
  return a.reduce((a,c)=>a+c,0)
};