let x = 1;
const y = 3.1;

console.log(y);

let z = "asdf";
const a = "4.123"

console.log(Number.isInteger(y));

console.log(Number.parseFloat(a).toFixed(10));


//functions
function test(a) {
    console.log("test " + a);
}

const test2 = function (a) {
    console.log("test2 " + a);
}

const test3 = (a) => {
    console.log("test3 " + a);
}

test(1);
test();
test(1, 2, 3);

//objects
const myObj = {
    name: "Felix"
};

console.log(myObj);
console.log(myObj.name);


const largerObject = {
    name: "Felix", age: 6, action: function () {
        return `Hello ${this.name} how are you today?`;
    }, secondaction: (number) => {
        return `Hello ${this.name} my age  is ${this.age}`;
    }
}

console.log(largerObject);
console.log(largerObject.age);
console.log(largerObject.action());


//classes
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#age = age;
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    sayHi() {
        console.log(`Hello my name is ${this.#name}`);
    }
}

let p = new Person("Max", 4);
p.sayHi();
// p.name = "Katrin";
console.log(p.name);

//inheritance
class Student extends Person {
    #sid;

    constructor(name, age, sid) {
        super(name, age);
        this.#sid = sid;
    }
}

let s = new Student("Felix", 6, 123);
s.sayHi();


//async - Promises
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (error) {
        reject("No! Reject promise!");
    } else {
        resolve("Yes! Resolve promise!");
    }
});

myPromise.then(value => {
    console.log(value);
}).catch(error => {
    console.error(error)
});


const users = fetch('https://jsonplaceholder.typicode.com/users');
console.log(users);

users.then(value => {
    return value.json();
}).then(data => {
    // console.log(data);
}).catch(error => {
    console.error(error);
});


//async - await
async function myAsyncFunction() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();
    console.log(123);
    return jsonUserData;
}

console.log("1");
myAsyncFunction().then(data => {
    console.log("data");
});
console.log("2");
