"use strict";
var _a;
let personName = "Fanta";
let personAge = 20;
let isMarried = false;
let level;
function printName(name) {
    console.log(name);
}
let numbers = [1, 2, 3, 4, 5];
let user = [1, "Fanta"];
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
var Color;
(function (Color) {
    Color["Red"] = "r";
    Color["Green"] = "g";
    Color["Blue"] = "b";
})(Color || (Color = {}));
;
;
function calculateTax(income, taxYear) {
    if (income < 50000)
        return income * 0.8;
    return income * 0.9;
}
console.log(calculateTax(10000));
let employee = {
    id: 1,
    retire: (date) => {
        console.log(date);
    }
};
employee.name = "Fanta";
let employee2 = {
    id: 2,
    name: "Fanta",
    retire: (date) => {
        console.log(date);
    }
};
function kgToPounds(kg) {
    if (typeof kg === 'number')
        return kg * 2.2;
    return parseInt(kg) * 2.2;
}
kgToPounds(10);
kgToPounds("10kg");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 10;
let bookCategory = 101;
function greet(name) {
    if (name)
        console.log("Hello " + name);
    else
        console.log("Hello");
}
greet(null);
function getCustomer(id) {
    return id == 0 ? null : {
        birthday: new Date()
    };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customer2 = getCustomer(1);
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let marks = [1, 2, 3, 4, 5];
console.log(marks === null || marks === void 0 ? void 0 : marks[0]);
let log = null;
log === null || log === void 0 ? void 0 : log("Hello");
let printLog = (message) => console.log(message);
printLog === null || printLog === void 0 ? void 0 : printLog("This is a log message.");
//# sourceMappingURL=index.js.map