// an array of string-elements; return the character length of all the elements in a separate array;
const heroes = ["Tom Hanks", "Tom Hardy", "Tom Cruise", "Johny Depp"];
const fLengths = heroes.map((friend) => friend.length);
// console.log(fLengths);

// an array of objects;
const products = [
  { name: "Laptoop", price: 49000, color: "silver-black" },
  { name: "Mobile", price: 2100, color: "black" },
  { name: "Kindle", price: 12000, color: "palm" },
  { name: "WD SSD", price: 5600, color: "white" },
];

const productNames = products.map((product) => product.name);
const productPrices = products.map((product) => product.price);
// console.log(productNames);
// console.log(productPrices);
//looping through an array of objects with .map() method
products.map((p) => console.log(p));
// in all of the above case .map() method was used where we expected some returns.
// we can do the same thing with .forEach() loop;
products.forEach((product) => console.log(product));
