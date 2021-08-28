function mean(list){
    return [list.reduce((a,c)=>a+(+c==c?+c:0),0)/10,list.filter(e=>+e!=e).join``]
  }