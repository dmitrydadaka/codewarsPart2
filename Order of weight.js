function arrange(arr){
    const sorted=(w)=>{
    if (w.slice(-2)==='KG') return w.slice(0,-2)*1
    else if (w.slice(-1)==='T') return w.slice(0,-1)*1000
    else return w.slice(0,-1)*0.001
    }
    return arr.sort((a,b)=>sorted(a)-sorted(b))
  }
  
  function arrange(arr){
    console.log(arr);
    return arr.sort((x,y)=>+w(x) > +w(y));
  }
  
  function w(x){
    return x.replace("KG","000").replace("G","").replace("T","000000")
  } 
  
  arrange=arr=>(val=>arr.sort((a,b)=>val(a)-val(b)))
  (val=>parseInt(val)*{G:1,KG:1000,T:1000000}[val.replace(/\d/g,'')])
  
  
  function arrange(arr){
  return arr.sort((a,b)=>(a.replace(/\d/g,'')=='G'?parseInt(a):a.replace(/\d/g,'')=='KG'?
        parseInt(a)*1000:parseInt(a)*1000000)-(b.replace(/\d/g,'')=='G'?parseInt(b):b.replace(/\d/g,'')=='KG'?
        parseInt(b)*1000:parseInt(b)*1000000))
  }