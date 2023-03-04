//variables
//variables are used to store the data
//String ,number,boolean,array, object
//we can declare the variables by using var and let or const keywords
// let and const keywords are introduced in the ES6 Version
//Variables name should contain the a-z and A-Z and 0-9 and $ and _
//Variables shouldn't start with digits
/*
Syntax:
var/let/const variablename=value;

*/
var name="Nandyala Sudharshan";
console.log(name);
var first_name="Nandyala";
var last_name="Sudharshan";
console.log("Full Name :"+first_name+"->"+last_name);
var x ="Hello";
x === "Hello"?console.log("Welcome"):console.log("Bye");
var var_1="hello";
console.log(var_1);
var decimalNum=100;
var doubleNum=123.1234;
var hexadecimalNum=0x123abc;
var octalNum=0o123;
var binaryNum=0b1010;
console.log(
    decimalNum,
    doubleNum,
    hexadecimalNum,
    octalNum,
    binaryNum
)
//Boolean
//Ture-->1
//False-->2
let flag=true;
console.log(flag);
console.log(true+true);
console.log(true-false);
console.log(true-true);
console.log(1+true);
console.log("1"+true);
console.log(+"1"+true);

//Ternary operator
var x=false; 
x==true?console.log("Its True"):console.log("It's False");
console.log(x);

//string
//Collection Of Characters called as String
//How to represent the string in the follwing way
//'' and "" and ``(backtick)
// ``(backtick) operator has introduced in ES6
//``(backtick) operator used to define pargraphs
var sub="ReactJS";
var welcomeMessage=`Welcome To ${sub}`;
var movieName='Welcome ReactJS';
console.log("Subject :"+sub);
console.log()
console.log("Movie Name :",movieName);
console.log(welcomeMessage);
var sub_1="ReactJS";
var sub_2="NodeJS";
var sub_3="MongoDB";
var mernStack=`${sub_1} <==> ${sub_2} <==> ${sub_3}`;
console.log(mernStack);
var table_name="Employee";
var salary=30000;
var sql_query=`select * from ${table_name} where empSalary=${salary}`;
console.log(sql_query);
var user_name="admin";
var user_pwd="admin123";
var sql_query2=`select * from ${table_name} where userName='${user_name}' And userPwd='${user_pwd}'`;
console.log(sql_query2);
//Undefied
var message;
console.log(message);
var n=null;
console.log(n);
//typeof Operator
console.log(typeof "Hello");
console.log(typeof 122);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
