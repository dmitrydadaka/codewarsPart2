function elimination(arr){
    return arr.find((v,i)=>arr.indexOf(v)!=arr.lastIndexOf(v))||null
    }
    
    function elimination(arr){
    a=arr.find((v,i)=>arr.indexOf(v)!=arr.lastIndexOf(v))
      return a==undefined?null:a
    }