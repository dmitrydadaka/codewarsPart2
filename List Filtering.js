filter_list=(_)=>_.filter(x=>typeof x=='number')

function filter_list(l){
  return l.filter(x=>typeof x !='string')
}