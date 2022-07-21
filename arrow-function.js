//js expression
/* const sum = function add(num1, num2 = 0) {
  return num1 + num2;
};
const result = sum(15);
console.log(result); */

//anonymous function; with second parameter set to default value 0 ;
/* const sum2 = function (num1, num2 = 0) {
  return num1 + num2;
};
const result = sum2(15, 20);
console.log(result); */

// arrow function; where we write only parameters of the function after equal sign, then we put arrow function sign (=>) and then we write the return part expression ;
const sum3 = (num1, num2) => num1 + num2;
console.log(sum3(15, 17));
