const stringTask = s =>
    s.replace(/(.)/g, (_,p) => /[^aoyeui]/i.test(p) ? `.${p}` : "").toLowerCase();
    function stringTask(s){
        return s.toLowerCase().replace(/[aoieuy]/g,'').replace(/./g, x=>'.'+x)
          
      }
      function stringTask(s){
        return s.toLowerCase().replace(/[aoieuy]/g,'')!=''?
          '.'+s.toLowerCase().replace(/[aoieuy]/g,'').split('').join('.'):''
      }