greet = n => `Hello ${n[0].toUpperCase()}${n.substr(1).toLowerCase()}!`;

const greet = name =>
  `Hello ${name.toLowerCase().replace(/\w/, val => val.toUpperCase())}!`

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};

var greet = function(name) {
return 'Hello '+name[0].toUpperCase()+name.substring(1).toLowerCase()+'!'
};