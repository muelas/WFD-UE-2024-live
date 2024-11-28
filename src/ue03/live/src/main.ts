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
const year = <HTMLSpanElement>document.getElementById("year");
const thisYear: string = new Date().getFullYear().toString();
year.textContent = thisYear;
year.setAttribute("datetime", thisYear);


// Type assertions
type One = string;
type Two = string | number;
type Three = 'hello';

let a: One = 'hello';
let b = a as Two;
let c = a as Three;


const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return a + b;
    return "" + a + b;
}

let myVal: string = <string>addOrConcat(4, 2, "concat");
let nextVal: number = addOrConcat(21, 21, "concat") as number;
// console.log(nextVal.toFixed(2)); //Error


// DOM
let img = document.getElementById("img") as HTMLImageElement;
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

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "TypeScript") {
    }

    public printMe() {
        console.log(`Name: ${this.name}, Music: ${this.music}, Age: ${this.age}, Language: ${this.lang}`);
    }
}

const andreas = new Coder("Andreas", "Metal", 39);
andreas.printMe();

class WebDev extends Coder {
    constructor(name: string, music: string, age: number, public browser: string) {
        super(name, music, age);
        this.browser = browser;
    }

    public printLang() {
        console.log(`I write ${this.lang}`);
    }

    // Error
    // public printAge() {
    //     console.log(`I am ${this.age} years old`);
    // }
}

const max = new WebDev("Max", "Kindermetal", 4, "Chrome");
// console.log(max.age); // Error
// console.log(max.lang);  // Error


// Interfaces und Klassen
interface Musician {
    name: string,
    instrument: string,

    play(action: string): string
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const page: Musician = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));


// getter und setter
class Person {
    private _age: number

    constructor(age: number) {
        this._age = age;
    }

    public getAge(): number {
        return this._age;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (value >= 0)
            this._age = value;
    }
}

const felix = new Person(6);
// console.log(felix._age); // Error
console.log(felix.getAge());
felix.age = -10;
console.log(felix.age);
