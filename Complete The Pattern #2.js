const pattern = n =>
  n > 0 ? [...Array(n)].map((_, idx) => [...Array(n - idx)].map((_, idx) => n - idx).join(``)).join(`\n`) : ``;

function pattern(n,s=''){
 return Array.from({length:n},(_)=>s+=n--).reverse().join`\n`
}


function pattern(n) {
 var number = "", output = "";
 while (n > 0) {
   number = number + n;
   output = number + (output ? "\n" : "") + output;
   n--;
 }
 return output;
}