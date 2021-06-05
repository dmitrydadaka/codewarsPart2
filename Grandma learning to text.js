const textin = str => 
str.replace(/t[wo]?o/gi,'2')


var textin=s=>s.replace(/two|too?/gi,'2')

function textin(str){
return str.replace(/(too)|(two)|(to)/gi, '2')
}