function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }
  
  function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
    }
  
  function stray(n) {
    return n.reduce((a,c)=>a^c)
  }
  
  function stray(s) {
    return s.find(x=>x!=s.find((x,i,_)=>x==_[i+1]))
  }