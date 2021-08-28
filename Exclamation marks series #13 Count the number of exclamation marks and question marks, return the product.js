function product(s){
    return (s.match(/!/gi)||[]).length*(s.match(/\?/gi)||[]).length
    }