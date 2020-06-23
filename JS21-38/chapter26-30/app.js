// Question#01
// var num = prompt("Enter positive integer ");
// document.write("Number: "+num+"<br>");
// document.write("Round off value: "+Math.round(num)+"<br>");
// document.write("Floor value: "+Math.floor(num)+"<br>");
// document.write("Ceil value: "+Math.ceil(num));


// question#02

// var num = prompt("Enter negative floating point ");
// document.write("Number: "+num+"<br>");
// document.write("Round off value: "+Math.round(num)+"<br>");
// document.write("Floor value: "+Math.floor(num)+"<br>");
// document.write("Ceil value: "+Math.ceil(num));


// question#03

// var num = prompt("Enter negative/positive integer ");
// document.write("Absolute value of "+ num + " is: "+Math.abs(num));


// question#04
// var random = Math.floor(Math.random()*6)+1;
// document.write("Random dice value: " + random);


// question#05.............................

// var random = Math.floor(Math.random()*2)+1;
// if(random===2){
// document.write(random+"<br>");    
// document.write("Random coin value:  Heads");
// }
// else{
//     document.write(random+"<br>");
//     document.write("Random coin value:  Tails");
// }



// question#06.............................
// var random = Math.floor(Math.random()*99)+1;
//  document.write("Random dice value: " + random);



// question#07.............................

// var weight = prompt("Enter your weight");

//  document.write("The weight of user is " + parseFloat(weight) + " kilograms");






// question#08.............................
var input = prompt("Enter number between 1 and 10");
var num = parseInt(input);
var secret = Math.floor((Math.random() * 10) + 1);

if(secret == num)
{
	document.write("Congratulations! your number is similar to the secret number");
}
else
{
	document.write("Try again!");
}

