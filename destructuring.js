/* 
// defining an object

1. declaring object_name with const 
2. equal sign (=)
3. curly braces {}
// below things will be inside the curly braces
4. property_name
5. colon (:)
5. object property value; either number , string or array
6. every property will be separated by comma (,) except the last property

// accessing the object property 

1. object_name.property_name; either store it in a variable or console.log() it
 */

const fish = {
  id: 3458,
  name: "King hilsha",
  price: 1200,
  phone: "01849715021",
  address: "meghna",
  dress: "silver",
};

// previously we used to access an object's property by storing it in a variable like below ;
/* const phone = fish.phone;
const dress = fish.dress;
const name = fish.name;
const price = fish.price; */

// but now there's an easy solution which can be written in just one line;
// this is called destructuring;

const { phone, dress, name, price } = fish;

// 4 lines of code reduced to just 1 line.

// console.log(name, price, dress, phone);

//Example of nested object;
const company = {
  name: "GP",
  ceo: {
    id: 103,
    name: "Mr. Parker",
    nationality: "Nordik",
    food: "Pizza",
    car: "BMW",
    sports: "Golf",
  },
  web: { work: "Web Design", employee: 22, framework: "React.js" },
};

// previous way to access property

// const food = company.ceo.food;
// const employee = company.web.employee;

// destructured way
const { framework, employee } = company.web;
const { car, nationality } = company.ceo;

console.log(framework, employee);
console.log(car, nationality);
