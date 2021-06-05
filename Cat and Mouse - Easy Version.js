const catMouse = s => `${s.length < 6 ? 'Caught' : 'Escaped'}!`;

function catMouse(x){
return /C.{0,3}m/g.test(x)?"Caught!":"Escaped!"
}

function catMouse(x){
return x.length<=5?'Caught!':"Escaped!"
}

function catMouse(x){
return x.replace(/[Cm]/g,'').length>3?"Escaped!":"Caught!"
}