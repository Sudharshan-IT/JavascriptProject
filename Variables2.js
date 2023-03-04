
//By using var keyworkd we can override the data 
//By using let keyword we can't overrie the data and it throws an error or excecption
//var name="Bharath";
//var name="Kumar Reddy";
//console.log(name);
let name="Sudharshan";
let name1="yadav";
console.log(name);
console.log(name1);
console.log(name +"->"+ name1);
//var keyword allows the duplicate variables
//let keyworkd wont allow the duplicate variables
//Global Variable
/*
var data=100;
console.log("Global Variable Data :",data);
{
    //Local Variable
    var data=200;
    console.log("Local Variable Data :",data);
}
console.log("Global Variable Data:",data);
*/
let data=100;
console.log("Global Variable Data :",data);
{
    //Local Variable
    let data1=200;
    console.log("Local Variable Data :",data1);
}
console.log("Global Variable Data:",data);
//If any block of code effecting the global member that is called global polluting issue
//Global Poullutin issue raised because of var key word
//we can overcome global polluting issue with let key word

//Variable Declaration and Initialization
//Variable Accessing
var msg="Welcome";
console.log(msg);

//Variable Hoisting
//Getting Undefined Before Declaration and Initialization is Called Variable Hoisting
//we can overcome variable hoising by using let key word
//console.log(greet);
//var greet="Hello";
//console.log(greet);
//let greet="Hello";

/*
        Var                                                    let
        1.it allows duplicate variable names         1.It wont allow duplicate variables
        2.breaks scope rules                         2.follows scope rule
        3.Global Polluting Issue Raised              3.Overcome the issue
        3.Variable Hoisting Raised                   4.Overcome the issue
*/
//constant key word
//const value=100;
//value=200;
//console.log(value);
const numbers=[100,200,300,400];
//numbers=[];
console.log(numbers);
numbers[0]=200;
numbers[1]=300;
numbers[2]=400;
numbers[3]=500;
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
