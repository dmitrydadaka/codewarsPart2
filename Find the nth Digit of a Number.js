var findDigit = function(n, nth){
    return nth<=0?-1:+[...n+''].reverse()[nth-1]||0
 }