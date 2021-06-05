var testit=(a,s)=>a.map(v=>v!="run").reduce((t,c,i)=>t+(s[i]=="|"?c?'|':'/':c?'x':'_'),"")
function testit(act,s){
    return s.split('')
      .reduce((a,b,i)=>a+({"run_":"_","run|":"/","jump_":'x',"jump|":'|'}[act[i]+b]),'')
  }
  function testit(act,s){
    return s.split('').map((c,i)=>({"run_":"_","run|":"/","jump_":'x',"jump|":'|'}[act[i]+c])).join('')
  }
  function testit(act,s){
    return s.split('').map((x,i)=>act[i]=='run'&&s[i]=='|'?'/':
                           act[i]=='run'&&s[i]=='_'?'_':act[i]=='jump'&&s[i]=='_'?'x':'|').join``
  }  