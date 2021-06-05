f=n=>n%1==0&&n>0&&n/2*++n

function f(n){
return n>0&&n%1==0?n*(n+1)/2:false
};

function f(n){
return n>0&&n%1==0?[...Array(n)].reduce((a,c,i)=>a+(i+1),0):false
}