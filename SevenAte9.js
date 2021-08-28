function sevenAte9(str){
    return str.replace(/79(?=7)/g,'7')
    }
    
    function sevenAte9(str){
    return str.split('').map((x,i,_)=>i==0?x:x==9&&_[i-1]==7&&_[i+1]==7?'':x).join``
    }