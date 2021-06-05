const swap = str =>
  str.replace(/\w/g, val => val[`to${val < `a` ? 'Low' : 'Upp'}erCase`]());

function swap(str){
return str.replace(/[a-z]/gi,x=>x==x.toUpperCase()?x.toLowerCase():x.toUpperCase())
}