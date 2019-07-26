/*
Convert the following declarative function to a function expression and then convert the
function expression to use arrow syntax. Demonstrate each version in use by outputting a
result to the console log for each function.
function multiplyNums(x, y, z){
return “new number is “ + x * y * z;
}
*/
var x = 5;
var y = 2;
var z = 3;

console.log("Normal usage:");
var multiplyNums = function (x,y,z) {
    return "New number is "+ x * y * z ;
}
console.log(multiplyNums(x,y,z));

console.log("\nArrow usage:");
const multiNums = (x, y, z) => "New number is " + x * y * z;
console.log(multiNums(x,y,z));