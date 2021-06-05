function bald(x){
    return [(y=x.split('/')).join`-`, 
            ["Clean!","Unicorn!","Homer!","Careless!","Careless!","Careless!"][y.length-1]||'Hobo!']
    }
    function bald(x) {
        const count = x.split('/').length - 1;
        let look;
        switch (count) {
          case 0: look = 'Clean'; break;
          case 1: look = 'Unicorn'; break;
          case 2: look = 'Homer'; break;
          case 3:
          case 4:
          case 5: look = 'Careless'; break;
          default: look = 'Hobo';
        }
        return [x.replace(/\//g, '-'), look + '!'];
      }
      function bald(x){
        return [x.replace(/[^-]/g,'-'),x.replace(/[^/]/g,'').length==0?
                "Clean!":x.replace(/[^/]/g,'').length==1?
                "Unicorn!":x.replace(/[^/]/g,'').length==2?
                "Homer!":x.replace(/[^/]/g,'').length<=5?
                "Careless!":"Hobo!"]
        }
        function bald(x){
            return [x.replace(/[^-]/g,'-'),x.replace(/[^/]/g,'').length==0?
                   "Clean!":x.replace(/[^/]/g,'').length==1?
                   "Unicorn!":x.replace(/[^/]/g,'').length==2?
                    "Homer!":x.replace(/[^/]/g,'').length<=5?
                   "Careless!":"Hobo!"]
            }
            