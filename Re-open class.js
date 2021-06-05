"".__proto__.myNewMethod=function(){return this.toUpperCase();}


String.prototype.myNewMethod=function(){return this.toUpperCase()}

String.prototype.myNewMethod = String.prototype.toUpperCase;

String.prototype.myNewMethod=function(){return this.replace(/\w/gi, x=>x.toUpperCase())}