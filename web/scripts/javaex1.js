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


//Task 3
function Student(studentName, studentId) {
    this.studentName = studentName;
    this.studentId = studentId;
    
    this.toString = function () {
        return studentName + " " + studentId;
    };
}

var stu1 = new Student("1Dennis", 134);
var stu2 = new Student("2Dennis", 234);
var stu3 = new Student("3Dennis", 334);
var stu4 = new Student("4Dennis", 434);

var stuArray = [stu1, stu2, stu3, stu4];

window.console.log(stu1.toString());
for (var i = 0; i < stuArray.length; i++) {
    window.console.log(stuArray[i]);
}

for (var Student in stuArray) {
    window.console.log(Student.toString());
}
