arithmetic=(a,b,o)=>eval(a+'*/+-'['mdas'.search(o[0])]+b)

function arithmetic(a, b, o){
  return {'add':a+b,'subtract':a-b,'multiply':a*b,'divide':a/b}[o]

}

function arithmetic(a, b, o){
  o={'add':'+','subtract':'-','multiply':'*','divide':'/'}[o]
return eval(a+o+b)
}