"use strict";
// Copyright
//v1
/*
const year: HTMLElement | null = document.getElementById("year");
const thisYear: string = new Date().getFullYear().toString();
if (year) {
    year.textContent = thisYear;
    year.setAttribute("datetime", thisYear);
}
*/
//v2
// const year = document.getElementById("year") as HTMLSpanElement;
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.textContent = thisYear;
year.setAttribute("datetime", thisYear);
let a = 'hello';
let b = a;
let c = a;
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(4, 2, "concat");
let nextVal = addOrConcat(21, 21, "concat");
// console.log(nextVal.toFixed(2)); //Error
// DOM
let img = document.getElementById("img");
img.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
img.alt = "Google Logo";
// Classes
//v1
// class Coder {
//     // members
//     name: string;
//     music: string;
//     age: number;
//     lang: string;
//
//     constructor(name: string,
//                 music: string,
//                 age: number,
//                 lang: string) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
// }
//v2
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    printMe() {
        console.log(`Name: ${this.name}, Music: ${this.music}, Age: ${this.age}, Language: ${this.lang}`);
    }
}
const andreas = new Coder("Andreas", "Metal", 39);
andreas.printMe();
class WebDev extends Coder {
    constructor(name, music, age, browser) {
        super(name, music, age);
        this.browser = browser;
        this.browser = browser;
    }
    printLang() {
        console.log(`I write ${this.lang}`);
    }
}
const max = new WebDev("Max", "Kindermetal", 4, "Chrome");
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));
// getter und setter
class Person {
    constructor(age) {
        this._age = age;
    }
    getAge() {
        return this._age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0)
            this._age = value;
    }
}
const felix = new Person(6);
// console.log(felix._age); // Error
console.log(felix.getAge());
felix.age = -10;
console.log(felix.age);
