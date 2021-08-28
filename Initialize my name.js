function initializeNames(name){
    return name.replace(/(?!^)\b\w+\b(?!$)/g, x=>x[0]+'.')// Insert your brilliant code here
  }
  
  function initializeNames(name){
    return name.replace(/ (\w)\w*(?= )/g, ' $1.')// Insert your brilliant code here
  }
  
  function initializeNames(name){
    return name.split(' ').map((e,i,arr)=>i==0||e==arr[arr.length-1]?e:e[0]+'.').join` `// Insert your brilliant code here
  }