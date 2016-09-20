/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var numbers = [2,3,566,2,34,5,2,556,2,2,44,5,5666,7,8];

numbers.sort();

var tbody = document.getElementById("tbody");

numbers.forEach(function(number){
    var row = document.createElement("tr");
    row.innerHTML = "<td>"+number+"</td>";
    tbody.appendChild(row);
});


