/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var divNode = document.getElementById("d1");
//
//divNode.innerHTML = "aasf";

var divs = document.getElementsByTagName("div");

//using 1 to not use the first div
for (var i = 1; i < divs.length - 1; i++) {
    divs[i].innerHTML = "Hello from inner" + i;
    
}

var bottom = document.getElementById("bottom");
var outer = document.getElementById("outerdiv");


var target;
var targets = new Targets();

outer.onclick = function (e) {
    e.target.style.background = "lightblue";
    targets.addTarget(e.target);
};

function Targets() {
    var targetList = [];
    this.targetList.push("dasfdsa");
//    this.addTarget = function(target){
//        this.targetList.push(target);
//    };
};








