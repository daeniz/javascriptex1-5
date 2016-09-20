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
    targets.changeTarget(e.target);
};

function Targets() {
    var targetList = [];
    targetList.push("dasfdsa");
    this.addTarget = function (target) {
        var index = targetList.findIndex(function (target1) {
            return target === target1;
        });
        window.console.log(index);
        if (index == -1) {
            targetList.push(target);
            window.console.log(targetList);
            return true;
        } else {
            this.removeElement(targetList,target)
            return false;
        }

    };
    this.changeTarget = function (target) {
        if (this.addTarget(target)) {
            target.style.background = "lightblue";
        } else {
            target.style.background = "";
        }
    };
    this.removeElement = function(array,element){
        var index = array.indexOf(element);
        array.splice(index,1);
    };


}
;

