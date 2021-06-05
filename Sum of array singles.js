function repeats(arr) {
    let i;
    let sum = 0;
    arr.sort((a, b) => {
      return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {
      if (arr[i] !== arr[i + 1]) {
        sum += arr[i];
        i--;
      }
    }
  
    return sum;
  };
  function repeats(arr) {
    let set = new Set()
    arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
    return [...set].reduce((s,v) => s+v, 0)
  }
  function repeats(arr){
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
  };

  function repeats(arr){
    return arr.sort((a,b)=>a-b).map((x,i)=>x==arr[i+1]||x==arr[i-1]?x.toString():x)
      .filter(x=>typeof x=='number').reduce((a,b)=>a+b,0)
    };