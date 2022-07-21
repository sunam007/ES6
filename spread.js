const numbers = [34, 56, 32, 67];
// console.log(numbers);
// console.log(...numbers);

const numbers2 = [...numbers];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
const numbers3 = [23, 45, 67, ...numbers, 678];
console.log(numbers3);

// const division = (num1, num2) => console.log(num1 / num2);

// const result = division(4, 2);
