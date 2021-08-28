function isNegativeZero(n) {
    return 1/Math.sign(n)==-Infinity
    }
    
    function isNegativeZero(n) {
    return Object.is(n,-0)
    }