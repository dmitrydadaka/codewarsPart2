const broken = x => x.replace(/[01]/g, n => n^1);

const broken = x => x.replace(/[01]/g, n => ~~!+n);

const broken = x =>
  x.replace(/\d/g, val => val ^ 1);

function broken(x){
return x.replace(/[01]/g,x=>'10'[x])
}