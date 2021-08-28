function getCount(s) {
    return (s=>{return{vowels:(s.match(/[oaiue]/gi)||[]).length,consonants:(s.match(/[qwrtypsdfghjklzxcvbnm]/gi)||[]).length}})(typeof s==='string'?s:'')
    }
    
    function getCount(words) {
     let t=typeof words=='string'
    
    a=t?words.replace(/[^oiuea]/gi,'').length:0
    b=t?words.replace(/[^bcdfghjklmnprqrstvwxyz]/gi,'').length:0
      return {vowels:a,consonants:b}
    }