String.prototype.isLetter = function() {
    if (this.length > 1) return false;
    if (this.charCodeAt(0) >= 65 && this.toUpperCase().charCodeAt(0) <= 90) return true;
    return false;
}

String.prototype.isLetter = function() {
return /^[a-z]$/i.test(this)}

String.prototype.isLetter = function() {
a='abcdefghijklmnopqrstuvwxyz'+'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
  return a.includes(this)&&this.length==1
}