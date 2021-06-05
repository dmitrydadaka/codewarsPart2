
const fizzBuzz = n => n%15 ? n%5 ? n%3 ? n : "Fizz" : "Buzz" : "FizzBuzz" ;

const fizzBuzz = n => {
  return n%3==0&&n%5==0?'FizzBuzz':n%3==0&&n%5!=0?'Fizz'
  :n%5==0&&n%3!=0?'Buzz':n
};