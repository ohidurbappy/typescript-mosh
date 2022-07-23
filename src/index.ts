let personName:string="Fanta";
let personAge:number=20;
let isMarried:boolean=false;
let level;

function printName(name:string):void{
    console.log(name);
}

// array
let numbers:number[]=[1,2,3,4,5];

// tuple
// 1, "Fanta"
let user:[number,string]=[1,"Fanta"];

// enum
enum Size{Small,Medium,Large};

let mySize=Size.Medium;

enum Color{Red='r',Green='g',Blue='b'};

const enum Weekdays{Mon,Tue,Wed,Thu,Fri,Sat,Sun};


// functions

function calculateTax(income:number,taxYear?:number):number{
    // taxYear is optional
    if (income < 50_000)
        return income * 0.8;
    return income * 0.9;
}

console.log(calculateTax(10_000));


// objects
let employee:{
    readonly id:number,
    name?:string,
    retire: (date: Date) => void
} = {
    id:1 ,
    retire: (date:Date)=>{
        console.log(date);
    }
}

employee.name="Fanta";



// type alias
type Employee = {
    readonly id: number,
    name:string,
    retire: (date: Date) => void
}

let employee2: Employee = {
    id: 2,
    name: "Fanta",
    retire: (date: Date) => {
        console.log(date);
    }
}

// union types

function kgToPounds(kg:number|string): number{
    // narrowing... the type
    if (typeof kg === 'number')
        return kg * 2.2;
    return parseInt(kg)*2.2;
}

kgToPounds(10);
kgToPounds("10kg");


// intersection types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget ={
    drag: () => {},
    resize: () => {}
}


// literal types (exact/specific value)
// the following variable can be either 10 or 20
let quantity: 10 | 20 = 10;

// literal with type
type BookCategory = 101 | 102 | 103;
let bookCategory: BookCategory = 101;

// nullable types
function greet(name: string | null):void{
    if (name)
        console.log("Hello " + name);
    else
        console.log("Hello");
}

greet(null)

// optional chaining
type Customer = {
    birthday: Date,
}

function getCustomer(id: number) : Customer | null {
    return id==0 ? null : {
        birthday: new Date()
    }
}

let customer = getCustomer(0);
console.log(customer?.birthday);

let customer2 = getCustomer(1);
console.log(customer2?.birthday?.getFullYear());

// optional element access operator
let marks:number[]=[1,2,3,4,5];
console.log(marks?.[0]);

// optional call operator
let log: any = null;
log?.("Hello");

let printLog : any = (message:string)=> console.log(message);
printLog?.("This is a log message.");