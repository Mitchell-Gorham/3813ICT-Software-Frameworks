var people = [
    {"firstName" : "Mitchell", "lastName" : "Gorham"},
    {"firstName" : "Shweta", "lastName" : "Mehta"},
    {"firstName" : "Boris", "lastName" : "Goodsuvabinch"}
];

console.log(people);

var s = JSON.stringify(people);
console.log(s);

var p = JSON.parse(s);
console.log(p);