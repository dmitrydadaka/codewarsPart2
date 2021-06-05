function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
 }
 
 function insertDash(num) {
  return [...num+''].map((x,i,_)=>x%2&&_[i+1]%2?x+'-':x).join``
 }