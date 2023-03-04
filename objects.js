const employee={
    "empId":101,
    "empName":"Nandyala Sudharshan",
    "empSal":30000
}
console.log(employee);
employee.empId=1001;
employee.empName="Sudharshan";
employee.empSal;
console.log(employee);
//Creating Object Using Litteral
const emp={
    firstName:"Nandyala",
    lastName:"Sudharshan",
    location:"Hyderabad",
    pincode:516162
};
console.log(emp);
const student={};
student.stdId=101;
student.stdName="Yadav";
student.stdAddress="kadapa";
console.log("Student Details :",student);
//Creating Object Using new Keyworkd
const department=new Object();
department.depId;
department.depName;
console.log(department);
//Storing List Of Employees Objects Into Employees Aarry Object
const employees=[
    {
    firstName:"Nandyala",
    lastName:"Sudharshan",
    location:"Hyderabad",
    pincode:516162
    },
    {
        firstName:"Adimulam",
        lastName:"Pavani",
        location:"Hyderabad",
        pincode:516134
    },
    {
        firstName:"Mamilla",
        lastName:"Narendra",
        location:"Bangalore",
        pincode:916162
    }
]
console.log(employees[2]);