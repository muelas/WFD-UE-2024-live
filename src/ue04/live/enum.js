"use strict";
// Enums with number
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
let myGrade = Grade.C;
let yourGrade = Grade.A;
let numGrade = 1;
// let noGrade: Grade = 6;  // Error: Type '6' is not assignable to type 'Grade'.
// Enums with Strings
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
    // Purple // Error: Enum member must have initializer.
})(Color || (Color = {}));
const myColor = Color.Blue;
// Enum with Computed Values
var Computed;
(function (Computed) {
    Computed[Computed["A"] = 1] = "A";
    Computed[Computed["B"] = 21] = "B";
    Computed[Computed["C"] = 42] = "C";
})(Computed || (Computed = {}));
console.log(Computed.C); // 42
// Enums with Mixed Values
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status["Inactive"] = "INACTIVE";
})(Status || (Status = {}));
