/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Task 1
var student = {studentid: 1, studentname: "Hansemand lugter", studentage: 19};
var noOfStudents = 37;
var name = "Henning";
var isStudent = false;
window.console.log(student, noOfStudents, name, isStudent);

//Task 2
var arrayOfTypes = [false, 23, "Hans", student, 13];

arrayOfTypes.forEach(function (element) {
    console.log(typeof element);
});


//Task 3 & 4
function Student(studentName, studentId, age, isFemale) {
    this.studentName = studentName;
    this.studentId = studentId;
    this.age = age;
    this.isFemale = isFemale;


}

Student.prototype.toString = function () {
    return this.studentName + " " + this.studentId;
};


var stu1 = new Student("1Dennis", 134, 90, true);
var stu2 = new Student("2Dennis", 234, 90, false);
var stu3 = new Student("3Dennis", 334, 24, true);
var stu4 = new Student("4Dennis", 434, 56, true);

var stuArray = [stu1, stu2, stu3, stu4];


for (var i = 0; i < stuArray.length; i++) {
    window.console.log(stuArray[i].toString());
}



function StudentList(studentList) {
    this.studentList = studentList;
}

StudentList.prototype.getYoungest = function () {
    var youngest = this.studentList[0];
    for (var i = 0; i < this.studentList.lenght; i++) {
        if(youngest.age>this.studentList[i].age){
           youngest = this.studentList[i];
        }
    }
    return youngest;
    
};


var list = new StudentList(stuArray);
var youngest = list.getYoungest();
window.console.log(youngest);
