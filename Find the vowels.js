const vowelIndices = word =>
  [...word].reduce((pre, val, idx) => /[aeiouy]/i.test(val) ? [...pre, ++idx] : pre, []);

function vowelIndices(word,a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
}

function vowelIndices(word){
  return [...word].reduce((a,c,i)=>'aoiueyAOIUYE'.includes(c)?[...a,i+1]:a,[])
}