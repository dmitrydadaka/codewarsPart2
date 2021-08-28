var typeOfTriangle=(a,b,c)=> [a,b,c].filter(x=>typeof x =='number').length!=3||a+b<=c||a+c<=b||b+c<=a ? "Not a valid triangle" : a==b&&b==c ? "Equilateral" : a==b||a==c||b==c ? "Isosceles" : "Scalene";

var typeOfTriangle = function (a, b, c) {
  const s = new Set([a, b, c]);
  return a + b > c && a + c > b && b + c > a ? {1: 'Equilateral', 2: 'Isosceles', 3: 'Scalene'}[s.size] : 'Not a valid triangle';
}
const typeOfTriangle = (...sides) => {

  let [a, b, c] = sides.sort((a, b) => a - b);
  let s = +(a === b) + +(b === c);

  return sides.every(s => s === +s) && a + b > c
       ? ['Scalene', 'Isosceles', 'Equilateral'][s]
       : 'Not a valid triangle';
    
}

var typeOfTriangle = function (a,b,c) {
return a==b&&b==c?'Equilateral':(a==b||b==c||c==a)&&(a+b>c&&c+b>a&&a+c>b)?'Isosceles':a+b>c&&c+b>a&&a+c>b?'Scalene':"Not a valid triangle"
}