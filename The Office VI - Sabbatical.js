function sabb(s, val, happiness){
    return (s.match(/[sabticl]/gi) || []).length+val+happiness>22?'Sabbatical! Boom!':'Back to your desk, boy.'
    }
    
    const sabb = (x, val, happ) => x.split('').reduce((s,a)=> s + 'sabbatical'.includes(a) , 0) + val + happ > 22 ?
               'Sabbatical! Boom!' :  'Back to your desk, boy.'
    
    function sabb(x, val, happ) {
      return (x.match(/[sabbatical]/gi) || []).length + val + happ > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
    }
    
    function sabb(s, v, h){
    return s.replace(/[^sabticl]/gi,'').length+v+h>22?'Sabbatical! Boom!':'Back to your desk, boy.'
    }

    function sabb(s, val, happiness){
    return [...arguments].reduce((a,b)=>a+(b==s?s.replace(/[^sabticl]/gi,'').length:b),0)>22?'Sabbatical! Boom!':'Back to your desk, boy.'
    }