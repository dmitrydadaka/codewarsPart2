const findAll = (nums, find) => nums
  .reduce((acc, num, index) => num === find ? [...acc, index] : acc, [])

const findAll = (array, n) => {
  return array.reduce((p,c,i)=>c==n?[...p,i]:p,[])
}

const findAll = (array, n) => {
  return array.reduce((p,c,i)=>c==n?[...p,i]:[...p],[])
}

const findAll = (a, n) => {
  return a.map((x,i)=>x==n?i:-1).filter(x=>x!=-1)
}