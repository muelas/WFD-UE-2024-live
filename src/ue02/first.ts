let x: number = 42;

let y: string;
y = "Max";
// y = 42; // Error

let bad: any;
bad = "Andi";
bad = 7;
bad = false;


const sumAny = (x: any, y: any): any => {
    return x + y;
}

console.log(sumAny(3, 4));
console.log(sumAny("Max", 3));


const sum = (x: number, y: number): number => {
    return x + y;
}
console.log(sum(3, 4));
// console.log(sum("Felix", 6)); // Error


let conditional: string | undefined;
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
cars.push(3)

let mixedData: (string | boolean | number)[] = ["Tea"];
mixedData.push(1991);
mixedData.push(true);

// Tuple

let myTuple: [string, string, number] = ["Max", "Müller", 4];
