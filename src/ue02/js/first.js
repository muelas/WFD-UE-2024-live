"use strict";
let x = 42;
let y;
y = "Max";
// y = 42; // Error
let bad;
bad = "Andi";
bad = 7;
bad = false;
const sumAny = (x, y) => {
    return x + y;
};
console.log(sumAny(3, 4));
console.log(sumAny("Max", 3));
const sum = (x, y) => {
    return x + y;
};
console.log(sum(3, 4));
// console.log(sum("Felix", 6)); // Error
let conditional;
conditional = "Katrin";
conditional = undefined;
// conditional = 42; // Error
const message = "Hello DDP";
console.log(message.charAt(4));
// message = 2; // Error
// message();  // Error
// Arrays
let stringarray = ["Max", "Felix", "Katrin"];
let cars = ["Tesla", "VW", 911];
cars.push("Audi");
cars.push(3);
let mixedData = ["Tea"];
mixedData.push(1991);
mixedData.push(true);
// Tuple
let myTuple = ["Max", "Müller", 4];
