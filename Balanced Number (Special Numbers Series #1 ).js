function balancedNum(number){
    let i, result = 0;
    number = number + "";
    for(i = 0; i < number.length / 2 - 1; i++){
        result += +number[i] - +number[number.length - 1 - i];
    }
    return result === 0 ? "Balanced" : "Not Balanced";
}
const balancedNum = number => {
    const stringNumber = String(number)
    const numbers = Array.from(
      Array(Math.floor((stringNumber.length-1)/2)),
      (_, index) => stringNumber[index] - stringNumber[stringNumber.length - 1 - index]
    )
  
    return numbers.reduce((total, number) => total + number, 0) === 0 ? 'Balanced' : 'Not Balanced'
  }