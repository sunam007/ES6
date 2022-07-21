// this is an example of re-use of an array declared with const;
// re-assigning is not allowed in variable declared with const;
// object also follows the same rules;
// use let only when re-assigning is required;
const numbers = [34, 67, 23, 89];
numbers.push(23);
console.log(numbers);
