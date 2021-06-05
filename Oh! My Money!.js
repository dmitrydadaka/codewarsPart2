money=x=>x.toLocaleString()
let money = n => `${n}`.replace(/.(?=(...)+$)/g, '$&,')

function money(num){
let s=num.toString().split('').reverse()
  .map((x,i)=>(i+1)%3==0?','+x:x).reverse().join``
return s[0]==','?s.slice(1):s
}