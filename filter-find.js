/* .filter(condition) filter out an array elements based on the conditions given to it via arrow function; */

const numbers = [1, 5, 7, 2, 15, 23, 45, 32, 10, 12];
const bigNumbers = numbers.filter((num) => num > 30);
const smallNumbers = numbers.filter((x) => x <= 15);

/* .filter(arrow function with condition) returns empty array; */

// console.log(smallNumbers, typeof smallNumbers);

const products = [
  { name: "Laptoop", price: 49000, color: "silver-black" },
  { name: "Mobile", price: 2100, color: "black" },
  { name: "Kindle", price: 12000, color: "palm" },
  { name: "WD SSD", price: 5600, color: "white" },
];

const expensive = products.filter((product) => product.price > 10000);
const black = products.filter((x) => x.color == "black");
console.log(black);
const black2 = products.find((x) => x.color == "blue");
console.log(black2);

/* .filter() vs .find()

    filter and find do almost the same thing but filter returns output as an array
    But find returns only the elements but not array; 

    if condition is false the filter() returns an empty array []
    but find() returns undefined;

    filter() returns all the element if the condition is true
    but find only returns the first element if the condition is true
*/
