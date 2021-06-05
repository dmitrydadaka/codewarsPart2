function solution(f, s){
    return (f.match( RegExp(s, 'g'))||[]).length
  }

  function solution(f, s){
    return f.split(s).length-1
  }