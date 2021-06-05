function exampleSort(arr,exampleArr){
    var ar=[];
    for (var i=0; i<exampleArr.length; ++i)
      for (var j=0; j<arr.length; ++j)
        if (arr[j]==exampleArr[i])
          ar.push(arr[j]);
    return ar;
  }
  
  function exampleSort(arr,Arr){
  return arr.sort((a,b)=>Arr.indexOf(a)-Arr.indexOf(b))
  }
  
  function exampleSort(arr,Arr){
    let a=[]
  Arr.map((x,i)=>a.push(arr.filter(y=>y==x)))
  return [].concat(...a)
  }