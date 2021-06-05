const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')
const removeConsecutiveDuplicates = s => s.split(" ")
.filter((x,i,_) => x!=_[i-1]).join(" ");
const removeConsecutiveDuplicates = s =>{
    var a=s.split(' ')
    return a.filter((x,i)=>x!=a[i+1]).join` `
    }