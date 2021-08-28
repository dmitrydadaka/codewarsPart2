function addArrays(a1, a2) {
    if(a1.length!=a2.length)throw 'Errrrror'
    return a1.map((x,i)=>x+a2[i])
   }