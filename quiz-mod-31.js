//q3
function min(nums) {
  return Math.min(nums);
}
// console.log(min([1, 3, 2]));

//q4
const cube = (x) => x * x * x;
// console.log(cube(2));
//q5
const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);

//q6
const { x, y, z } = { x: 1, y1: 2, z: 3 };
// console.log(y);
//q7
const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
// console.log(output);

// q8
const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
const bff = friends.find((fr) => fr.length == 5);
// console.log(typeof bff);

//q9
const product = {
  name: "Laptop",
  model: "Yoga 3",
  price: 49000,
  dusk: "512SSD",
};
const { price } = product;
// console.log(price);
//q10
const name = "Adam Sandlar";
const greeting = `Hello ${name} welcome to the club`;
console.log(greeting);
