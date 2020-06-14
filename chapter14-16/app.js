// question#1
// var Student = [];
// document.write("<br>");
// // question#2
// var Student = new array(expected_length);

// document.write("<br>");

// // question#3

// var string_array = ["one","two","three"];

// document.write("<br>");

// // question#4
// var numeric_array = [1,2,3,4];

// document.write("<br>");

// // question#5

// var boolean_array = [true,false,true];

// document.write("<br>");

// // question#6
// var mixed_array = ["one",2,3,"four",true];

document.write("<br>");
document.write("<br>");

// question#7
document.write("<h1>Qualifications:</h1>"+"<br>");
var qualification=[];
qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]; 
 var len = qualification.length; 
for (var i = 0; i < len; i++) 
 document.write((i+1) + ") " + qualification[i] + "<br>"); 

 document.write("<br>");
 document.write("<br>");


// question#8
var std_names = ["Madhu","Varsha","Nida"]; 
var std_scores=[320,430,480];
total_marks=500;
for (var i = 0; i < 3; i++) {
var per = (std_scores[i]/total_marks)*100;
document.write("Score of " + std_names[i] + " is " + std_scores[i]
 + ". Percentage: " + per + "% <br>"); 
}

document.write("<br>");
document.write("<br>");


// question#9
var color_names = ["Green","Red","Blue","Purple"]; 
document.write("<b>original Array</b> <br>")
document.write(color_names+ "<br><br>");
var beg_color = prompt("Enter a color that u want to add at beginning");

color_names.unshift(beg_color);
document.write("<b>a) Addition of color at beginning </b><br>" +color_names + "<br><br>");

var end_color = prompt("Enter a color that u want to add at end");
color_names.push(end_color);
document.write("<b>b) Addition of color at end </b><br>" +color_names + "<br><br>");

document.write("<b>c) Addition of 2 more colors at the beginning</b><br>");
color_names.unshift("Cyan","orange");
document.write(color_names+"<br><br>");


document.write("<b>d) Deletion of first color</b><br>");
color_names.shift();
document.write(color_names+"<br><br>");


document.write("<b>e) Deletion of last color</b><br>");
color_names.pop();
document.write(color_names+"<br><br>");
var color_pos = prompt("Enter the position where u want to add the color");
var color_name = prompt("Enter color name to store at thatposition");
color_names.splice(parseInt(color_pos),0,color_name);
document.write("<b>f) Addition of color at position " + parseInt(color_pos) + "</b><br>" +color_names + "<br><br>");

var del_color_pos = prompt("Enter the position from where u want to delete the color");
var no_of_colors= prompt("how many colors you want to delete");
color_names.splice(parseInt(del_color_pos),parseInt(no_of_colors));
document.write("<b>f) Deletion of "+ parseInt(no_of_colors) +" colors from positions "+ parseInt(del_color_pos) +"</b><br>" +color_names + "<br><br>");


document.write("<br>");
document.write("<br>");




// question#10
var std_scores = [320,230,480,120];
document.write("Scores of Students:  " + std_scores);
std_scores.sort();
document.write("<br>Ordered Scores of Students: " + std_scores);







document.write("<br>");
document.write("<br>");




// question#11


var cities = ["Tharparkar","Karachi","Lahore","Quetta","Hyderabad","Peshawar"];
var selected_cities=[];
for(var i= 2; i< 5;i++)
selected_cities.push(cities[i]);
document.write("<b>Cities List: </b><br>" + cities + "<br><br>");
document.write("<b>Selected Cities List: </b><br>" + selected_cities);


document.write("<br>");
document.write("<br>");



// question#12

var arr = ["This", "is", "my", "cat"];
document.write("<b>Array: </b><br>" + arr + "<br><br>");
document.write("<b>String: </b><br>" + arr.join(" ") + "<br><br>");



document.write("<br>");
document.write("<br>");




// question#13

var devices = new Array();
devices.push('Keyboard');
devices.push('Mouse');
devices.push('Printer');
devices.push('Monitor');

document.write("<b>Devices: </b><br>" + devices);
document.write("<br><br><b>FIFO Output</b><br>");

document.write(devices.shift() + "<br>");  
document.write(devices.shift() + "<br>");  
document.write(devices.shift() + "<br>");  
document.write(devices.shift() + "<br>"); 






document.write("<br>");
document.write("<br>");





// question#14

var devices = new Array();
devices.push('Keyboard');
devices.push('Mouse');
devices.push('Printer');
devices.push('Monitor');
document.write("<b>Devices: </b><br>" + devices);
document.write("<br><br><b>LIFO Output</b><br>");
document.write(devices.pop() + "<br>");  
document.write(devices.pop() + "<br>");  
document.write(devices.pop() + "<br>");  
document.write(devices.pop() + "<br>");  





document.write("<br>");
document.write("<br>");



// question#15

var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
for(var i=0; i<phone.length; i++)
document.write((i+1) +") "+ phone[i] + "<br>");  
