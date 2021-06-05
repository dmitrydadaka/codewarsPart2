const switcher = x =>
  x.reduce((pre, val) => pre + `zyxwvutsrqponmlkjihgfedcba!? `[--val], ``);

const switcher=x=>x.reduce((a,b)=>a+" ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")

function switcher(x){
return x.reduce((x,y)=>x+' ?!abcdefghijklmnopqrstuvwxyz '.split('').reverse()[+y],'')
}

function switcher(x){
return x.map((x,i)=>(' ?!abcdefghijklmnopqrstuvwxyz ').split('').reverse()[+x]).join``
}

function switcher(x){
const a=('?!abcdefghijklmnopqrstuvwxyz').split('').reverse()
a.push(' ')
return x.map((x,i)=>a[+x-1]).join``

}