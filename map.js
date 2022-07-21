// make an array in which every elements will be the double of original array.

const numbers = [11, 22, 33, 44, 15, 25, 35, 45];
const output = [];

const doubleIt = (num) => num * 2;

for (const number of numbers) {
  const result = doubleIt(number);
  output.push(result);
}
/* console.log(
  "doubled array is = ",
  output,
  "and the max number among them is = ",
  Math.max(...output)
); */

const output2 = numbers.map((x) => x * 2);
console.log(numbers, output2);
