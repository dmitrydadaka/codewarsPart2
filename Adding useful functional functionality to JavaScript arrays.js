Array.range = function(start, count) {
    var arr = [];
    while (count >0){
        arr.push(start++);
        count--;
    }
    return arr;
};

Array.prototype.sum = function() {
    return this.reduce(function(a,b){
        return a + b;
    }, 0);
};
Array.range = function(start, count) {
  return [...Array(count)].map((x,i)=>start+i)
}

Array.prototype.sum = function(x) {
  return this.reduce((a,b)=>a+b,0)
}