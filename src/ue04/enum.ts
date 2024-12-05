// Enums with number

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.A);

let myGrade: Grade = Grade.C;
let yourGrade: Grade = Grade.A;
let numGrade: Grade = 1;

// let noGrade: Grade = 6;  // Error: Type '6' is not assignable to type 'Grade'.

// Enums with Strings
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
    // Purple // Error: Enum member must have initializer.
}

const myColor: Color = Color.Blue;

// Enum with Computed Values
enum Computed {
    A = 1,
    B = 20 + A,
    C = B * 2
}

console.log(Computed.C);    // 42

// Enums with Mixed Values
enum Status {
    Active = 1,
    Inactive = "INACTIVE"
}
