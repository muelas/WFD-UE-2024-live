// motivation
const echoString = (arg: string): string => arg;
const echoNumber = (arg: number): number => arg;

let n: number = 42;
n = echoNumber(n);
let s: string = "Answer";
s = echoString(s);

const echo = <T>(arg: T): T => arg;

function echo2<T>(arg: T): T {
    return arg;
}

n = echo<number>(n);
s = echo(s);


const isObj = <T>(arg: T): boolean => {
    // return (typeof arg === "object") && !(arg instanceof Array);
    return (typeof arg === "object") && !(Array.isArray(arg)) && arg !== null;
}

console.log(isObj({name: "Andi"}));
console.log(isObj(123));
console.log(isObj([1, 2, 3]));
console.log(isObj(null));


const isTrue = <U>(arg: U): { arg: U, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false};
    }
    if (isObj(arg)) {
        return {arg, is: true};
    }
    return {arg, is: !!arg};
}

console.log("CHECK ISTRUE");
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Christian"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({name: "Christian"}));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));


interface BoolCheck<Type> {
    arg: Type,
    is: boolean
};

const checkBoolValue = <U>(arg: U): BoolCheck<U> => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false};
    }
    if (isObj(arg)) {
        return {arg, is: true};
    }
    return {arg, is: !!arg};
}


interface HasId {
    id: number
};

const processUser = <T extends HasId>(user: T): T => {
    if (user.id == 42) {
        console.log("Hello answer!");
    }
    return user;
}

console.log(processUser({id: 1, name: "Max"}));
console.log(processUser({id: 6, name: "Katrin", test: 12}));
console.log(processUser({id: 2}));
// console.log(processUser({name: "Felix"}));  //Error
// console.log(processUser({}));   //Error


class StateObject<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    get state(): T {
        return this.data;
    }

    set state(value: T) {
        this.data = value;
    }
}

const store = new StateObject("Max");
console.log(store.state);
store.state = "Felix";
console.log(store.state);
// store.state = 123;  // Error



const myState = new StateObject<(string | number | boolean)[]>([15]);
console.log(myState.state);
