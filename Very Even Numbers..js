const isVeryEvenNumber = n => 
  !!(--n % 9 % 2);

function isVeryEvenNumber(n) {
  return  !n--||n%9%2==1
}

function isVeryEvenNumber(n) {
while((n+'').length>1){
 n=(n+'').split('').reduce((a,c)=>a+ +c,0)
}
  return n%2==0
}