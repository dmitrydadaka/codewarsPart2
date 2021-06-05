function esrever( str ){
    let r = [...str].reverse();  
    r.push(r.shift());
    return r.join('');
  }
  
  
  function esrever( str ){
    return str.slice(0,-1).split('').reverse().join``+str.slice(-1)
  }
  
  function esrever( str ){
    if (str=='')
      return '';
    var ans='';
    for (var i=str.length-2; i>=0; --i)
      ans+=str[i];
    return ans+str[str.length-1];  
  }

  function esrever( str ){
    return str?str.split('').reduce((a,b)=>[b].concat(a),[])
      .slice(1).join``+str[str.length-1]:''
  }