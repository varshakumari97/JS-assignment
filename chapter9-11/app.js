// question#01

var cityName= prompt("Please enter city name here.");
if(cityName==="karachi"){
    document.write("Welcome to city of lights");
}


document.write("<br>");
document.write("<br>");




// question#02
var gender =prompt("please enter your gender:" );
if(gender==="male"){
    document.write("Good morning sir!");
}
else{
    document.write("Good morning Madam!");
}


document.write("<br>");
document.write("<br>");



// question#03
var color= prompt("Enter color name:");
if (color==="red"){
    document.write("Must stop");

}
else if(color==="yellow"){
    document.write("Ready to move");
}
else if(color==="green"){
    document.write("Move now");
}


document.write("<br>");
document.write("<br>");


// question#04
var currentFuel = prompt("what's your remaining fuel?");
if(currentFuel<"0.25liters"){
    document.write("please refill the fuel in the car");

    
}


document.write("<br>");
document.write("<br>");

// question#05
// a.............................
var a=4;                         
if(++a===5){                    //condition will run                     
    alert("condition is true");
}

//b..........................
var b=82;                    //the condition will not run
if(b++===83){
    alert("condition is true");
}

// c..............................

var c=12;
if(c++===13){
    alert("condition 1 is true");
}

if(c===13){
    alert("condition 2 is true");
}

if(++c<14){
    alert("condition 3 is true");
}

if(c===14){
    alert("condition 4 is true");
}
//             In above conditions only condtion 2 and 4 are true
// d.........................

var materialCost=20000;
var laborCost=2000;
var totalCost= materialCost+laborCost;
if(totalCost===laborCost+materialCost){                     //the condition will run because th total is equels to laborcost+materialcost 
    alert("The cost equels");
}

// e........................
if(true){
    alert("True");
}
if(false){
    alert("False");
}

// f................
if("car"<"cat"){
    alert("car is smaller than cat");
}





// question#06
var sub1 = prompt("Enter subject 1 marks");
var sub2 = prompt("Enter subject 2 marks");
var sub3 = prompt("Enter subject 3 marks");
var total = prompt("Enter total marks");
var obt_marks = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
var per = (obt_marks/total)*100;
document.write("Total marks : "+total);
document.write("<br>Marks obtained : "+obt_marks);
document.write("<br>Percentage : "+per);
if(per >= 80){
document.write("<br>Grade : A-One");
document.write("<br>Remarks : Excellent");
}
else if(per >= 70 && per < 80){
document.write("<br>Grade : A");
document.write("<br>Remarks : Good");
}
else if(per >= 60 && per < 70){
document.write("<br>Grade : B");
document.write("<br>Remarks : You need to improve");
}
else{
document.write("<br>Grade : Fail");
document.write("<br>Remarks : Sorry");
}




// question#07
var secretNumber=5;
var guessNumber=+prompt("guess the secret number");
// a........................................
if(guessNumber===secretNumber){
    document.write("Bingo! correct answer");
}
// b.........................
else if(guessNumber===++secretNumber){
    document.write("Close enough to correct answer");
}


document.write("<br>");
document.write("<br>");



// question#08
var givenNumber=+prompt("enter a number");
if(givenNumber%3===0){
    document.write("given number is divisble by 3");
}


document.write("<br>");
document.write("<br>");


// Question#09
var num=+prompt("enter number");
if(num%2===0){
    document.write("Given number is even");
}
else{
    document.write("Given number is odd");
}

document.write("<br>");
document.write("<br>");



// Question#10
    var tempreture=+prompt("enter tempreture here");
    if(tempreture>10&&tempreture<20){
        document.write("OMG Todat's weather is so cool ");
    }
    else if (tempreture>20&&tempreture<30){
        document.write("Todat's weather is cool "); 
    }
    else if (tempreture>30&&tempreture<40){
        document.write("The weather is normal today "); 
    }
    else if (tempreture>40){
        document.write("It's to hot outside "); 
    }


    document.write("<br>");
    document.write("<br>");    
    
    // question#11
    var num1 = prompt("Enter First number");
var num2 = prompt("Enter Second number");
var op= prompt("Enter operator");
var first = parseInt(num1);
var second = parseInt(num2);
if(op == '+'){
document.write(first + " + " + second + " = "  + (first+second));
}
else if(op == '-'){
document.write(first + " - " + second + " = "  + (first-second));
}
else if(op == '*'){
document.write(first + " * " + second + " = "  + (first*second));
}
else if(op == '/'){
document.write(first + " / " + second + " = "  + (first/second));
}
else if(op == '%')
{
document.write(first + " % " + second + " = "  +(first%second));
}
else{
document.write("Invalid operator");
}




