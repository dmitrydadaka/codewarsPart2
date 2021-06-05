getFirstPython=a=>(a=>a?`${a.firstName}, ${a.country}`:'There will be no Python developers')(a.find(x=>x.language=='Python'))

function getFirstPython(list) {
  a=list.filter(x=>x.language=='Python').map(x=>`${x.firstName}, ${x.country}`)[0]
  return a?a:'There will be no Python developers'
}