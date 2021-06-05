function toTime(s) {
    return  `${s>=3600?(s/3600)^0:0} hour(s) and ${s>=3600?s%3600==0?0:(s%3600/60)^0:(s/60)^0} minute(s)`
    }
    
    function toTime(s) {
    return  `${s>=3600?Math.floor(s/3600):0} hour(s) and ${s>=3600?s%3600==0?0:Math.floor((s-Math.floor(s/3600)*3600)/60):Math.floor(s/60)} minute(s)`
    }