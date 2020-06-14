
//     // question#01
var ch= prompt("enter ch");
if(ch>='A' && ch<='Z')
 { 
     document.write("uppercase letter");
    }
    else if(ch>='a' && ch<='z'){
        document.write("lowercase letter");
    }
    else if(ch>=1 && ch<=10){
        document.write("number");
    }

document.write("<br>");
document.write("<br>");

// // question#02

var num1=+prompt("enter first integer");
var num2=+prompt("enter second integer");
if(num1>num2){
    document.write(num1+ " is larger than "+ num2);
}
else if(num1<num2){
    document.write(num1+ " is smaller than "+ num2);
}
else{
    document.write(num1+ " is equal to "+ num2);
}




document.write("<br>");
document.write("<br>");


// // question#03
var num=prompt("enter a integer");
if(num>'0'){
document.write("number is positive");
}
else if(num<'0'){
    document.write("number is negative");
    }
   else if(num==='0'){
        document.write("number is zero");
        }



document.write("<br>");
document.write("<br>");


// // question#04
var ch=prompt("enter character");
if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
    document.write("True");
}
else{
    document.write("False");
}


document.write("<br>");
document.write("<br>");


// // question#05

var password="kumari";
var password2=prompt("please enter password");
if(password2===""){
    document.write("please enter a password");
}
else if(password2===password){
    document.write("Correct! the password you have entered is same as original :)");
}
else if(password2!==password){
    document.write("incorrect password ");
}

document.write("<br>");
document.write("<br>");


// // question#06
var greeting;
var hour=13;
if(hour<18){
   document.write( greeting="good day");
}
else{
    document.write( greeting="good evening");
}


document.write("<br>");
document.write("<br>");


// // question#07........................

var time=prompt("enter time ");

if(time>=00&&time<12){
    document.write("good morning");
}
else if(time>=12&&time<17){
    document.write("good afternoon");
}
else if(time>=17&&time<21){
    document.write("good evening");
}
else if(time>=21&&time<24){
    document.write("good night");
}