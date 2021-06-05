const head = ([head, ...tail]) => head;
const tail = ([head, ...tail]) => tail;
const init = (arr) => arr.slice(0, -1);
const last = (arr) => arr.slice(-1)[0];

head=x=>x[0]
tail=y=>y.slice(1)
last=z=>z[z.length-1]
init=w=>w.slice(0,-1)