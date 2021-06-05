function trim(x){
    // snip snip
    var beard = x.map(line => line.map(hair => hair == 'J' ? '|' : hair));
    
    // bzzzzz
    beard.pop();
    
    // ointment, YEOOOWCH!! bandaid
    beard.push((new Array(x[0].length)).fill('...'));
    
    // OH YAAAAAA!!!!
    return beard;
  }
  
  const trim = x =>
    x.map((val, idx) => idx < x.length - 1 ? val.map(v => v.replace(/J/, `|`)) : val.map(v => `...`));

  function trim(x){
    return x.map((y,i)=>i==x.length-1 ? 
                  y.map(y=>y.replace(/(.)+/g,'...')) : 
                  y.map(y=>y.replace(/J/g,"|"))
                );
  }
  
  function trim(x){
  return x.map((y,i)=>i==x.length-1?
               y.map(y=>y='...')
               :y.map(y=>y=='J'?'|':y))
  }