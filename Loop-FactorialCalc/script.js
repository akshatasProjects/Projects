let num = 5;

function factorialCalculator(num) {
  let result = 1;
  while (num > result) {
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
  }
  return result;
}

let factorialTotal = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorialTotal}`;
console.log(resultMsg);
