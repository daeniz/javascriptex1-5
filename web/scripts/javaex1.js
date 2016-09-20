
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


//Task 3 (extended a bit, to be reused for task 4)
function Student(studentName, studentId, age, isFemale) {
    this.studentName = studentName;
    this.studentId = studentId;
    this.age = age;
    this.isFemale = isFemale;

}
//For task 3
Student.prototype.toString = function () {
    return this.studentName + " " + this.studentId;
};

//For task 3
var stu1 = new Student("Lise", 134, 30, true);
var stu2 = new Student("Dennis", 234, 31, false);
var stu3 = new Student("Lizette", 334, 34, true);
var stu4 = new Student("Diana", 434, 16, true);
var stu5 = new Student("Cherry", 434, 12, true);

//Task 3 - adding students to array
var stuArray = [stu1, stu2, stu3, stu4, stu5];

//Task 3 - looping through array
for (var i = 0; i < stuArray.length; i++) {
    window.console.log(stuArray[i].toString());
}


//Task 4 - Studenlist Constructor
function StudentList(studentList) {
    this.studentList = studentList;
}
//Task 4 - method for StudentList object
StudentList.prototype.getYoungest = function () {
    var youngest = this.studentList[0];
    for (var i = 0; i < this.studentList.length; i++) {
        if (youngest.age > this.studentList[i].age) {
            youngest = this.studentList[i];
        }
    }
    return youngest;
};

//Task 4 - 
StudentList.prototype.getAllFemale = function () {
    var female = [];
    for (var i = 0; i < this.studentList.length; i++) {
        if (this.studentList[i].isFemale) {
            female.push(this.studentList[i]);
        }
    }
    return female;
};

//Testing task four - get youngest: outp
var list = new StudentList(stuArray);
var youngest = list.getYoungest();
window.console.log(youngest.age);

//Testing task four - get all female
var allFemale = list.getAllFemale();

for (var i = 0; i < allFemale.length; i++) {
    window.console.log(allFemale[i].studentName);
}

//Task 5
function removeStudent(array, student) {
    var index = array.indexOf(student);
    array.splice(index, 1);
}

//Testing removeStudent
removeStudent(stuArray, stu5);
window.console.log("Testing task 5");
for (var i = 0; i < stuArray.length; i++) {
    window.console.log(stuArray[i].toString());
}

//Task 6 - foreach
window.console.log("Task 6 - Building and testing Foreach");
stuArray.forEach(function (student) {
    if (student.age > 30) {
        window.console.log(student.studentName);
    }
});

//Task 7 - max() with indefinete args
function max() {
    var args = Array.prototype.slice.call(arguments);
    var tempObj = "";
    args.forEach(function (object) {
        if (tempObj < object)
            tempObj = object;
    });
    return tempObj;
}
//Testing 
window.console.log("Task 7 - return max: " + max(1, 5, 2, 3, "max", 5.42143, 1000));

//Task 8 - return current day
function returnThisDay() {
    var today = new Date().getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[today];
}
window.console.log("Task 8 - return the current day: " + returnThisDay());

//Task 9 - Mammals

function Animal(name, isMammal, legs, diet) {
    this.name = name;
    this.isMammal = isMammal;
    this.legs = legs;
    this.diet = diet;
}

Animal.prototype.toString = function () {
    return "A " + this.name + " " + "Eats: " + this.diet;
};

var ani1 = new Animal("Lion", true, 4, "Meat");
var ani2 = new Animal("Seal", true, 0, "Fish");
var ani3 = new Animal("Red Herring", false, 0, "stuff");
var ani4 = new Animal("Blackbird", false, 0, "worms");

var animals = [ani1, ani2, ani3, ani4];

animals.forEach(function (animal) {
    window.console.log(animal.toString());
});