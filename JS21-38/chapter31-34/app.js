// question#01

// var currentDate= new Date();
// document.write(currentDate);


// question#02


//   var month=["January","February","March","April","May","June","July",
//              "August","September","October","November","December"];
//   var d = new Date();
//   var n = month[d.getMonth()];
//   document.write("Current month: "+n);



// question#03 

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d= new Date();
// var dayName = days[d.getDay()];
// document.write(dayName);





// question#04

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d= new Date();
// var dayName = days[d.getDay()];
// if(dayName==="Sunday"|| dayName==="Saturday"){
// document.write("It's Fun day Today ");}




// question#05

// var d = new Date();
//   var n = d.getDate();
//   if(n<16){
//       document.write("First fifteen days of the month ");
//   }
//   else{
//       document.write("Last days of the month ");
//   }






// question#06

//  var a = new Date();
//  document.write("<b>Current Date :</b>" + a + "<br>");
//  var milliSc = a.getTime();
//  document.write("<b>Elapsed mili seconds since jan 1, 1970: </b>"+milliSc+"<br>");
//  var minutes= milliSc/60000;
//  document.write("<b>Elapsed minutes  since jan 1, 1970: </b>"+minutes);





// question#07
// var time = new Date();
// var currentTime= time.getHours();
// if(currentTime<12){

// alert("It's AM");
// }
// else{
//     alert("It's PM");
// }





// question#08

// var laterDate = new Date();
// laterDate.setMonth(11);
// laterDate.setDate(31);
// document.write("<b>Later date: </b>" +laterDate);






// question#09
// var date = new Date("June 18, 2015");
// var miliDate = date.getTime();
// var today = new Date();
// var todayMili = today.getTime();
// var diff = todayMili-miliDate;
// var days =Math.floor( diff/(1000*60*60*24));
// document.write(days);




// question#10

// var refDate = new Date("Dec 31, 2020");
// var milliSc= refDate.getTime();
// var sec = milliSc/1000;
// var beg = new Date ("2020");
// var milliScbeg= beg.getTime();
// var secd = milliScbeg/1000;
// var totalSeconds = sec - secd;
// document.write("<b>Reference date</b>:"+refDate+"<br>")
// document.write(totalSeconds+"had passed since begining of 2020");





// question#11

var timeNow = new Date();
var hours = timeNow.getHours();
var exHours= new Date(hours-1) ;
var resultHours = exHours.getHours(); 

document.write(timeNow+"<br>");
document.write(resultHours);



// question#12
// var d= new Date();
// document.write("Current Date :" + d + "<br>");
// d.setFullYear(1920);
// document.write("100 Years back :" +d);