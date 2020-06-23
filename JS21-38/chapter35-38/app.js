// Question#01

// function date (){
// var d = new Date();
// document.write(d);
// }
// date();



// question#02

// function name(fName,lName){
    
//     document.write("Welcome "+ fName+" "+lName)
// }
// name("varsha","kumari");




// question#03
// function sum (a,b){
//     var z=a+b;
//   return z;
// }
// var x=  sum(3,5);
// document.write(x);







// Question#04


// var num1 = prompt("Enter 1st number");
// var num2 = prompt("Enter 2nd number");
// var operator = prompt("Enter operator");

// operand1 = parseInt(num1);
// operand2 = parseInt(num2);

// var result = calculator(operand1,operand2,operator);

// if(result === false)
// {
// 	document.write("Invalid operator");
// }
// else
// {
// 	document.write(operand1 + " " + operator  + " " + operand2 + " = " + result);
// }

// function calculator(operand1,operand2,operator)
// {

// 	if(operator == '+')
// 	{
// 		return (operand1 + operand2);
// 	}
// 	else if(operator == '-')
// 	{
// 		return (operand1 - operand2);	
// 	}
// 	else if(operator == '*')
// 	{
// 		return (operand1 * operand2);	
// 	}
// 	else if(operator == '/')
// 	{
// 		return (operand1 / operand2);	
// 	}
// 	else if(operator == '%')
// 	{
// 		return (operand1 % operand2);	
// 	}
// 	else
// 	{
// 		return false;
// 	}
// }




// Question#05
// function sq(a,b){
//    var result= Math.pow(a,b);
//     document.write(result);

// }
// sq(2,2);








// Question#06
// function fact(n) {
//     if(n===0||n===1)
//     return 1;
//     else
//     return n*fact(n-1);
//   }
//   var result=fact(5);
//   document.write(result); 
  




// Question#07

// var number1 = prompt("Enter start number");
// var number2 = prompt("Enter end number");

// var num1 = parseInt(number1);
// var num2 = parseInt(number2);

// counting(num1,num2);

// function counting(num1,num2)
// {
// 	for(var i = num1; i <= num2; i++)
// 	{
// 		document.write(i + " ");
// 	}
// }










// question#08
// var base = prompt("Enter base");
//  var per = prompt("Enter Perpendicular");

//  var b = parseInt(base);
//  var p = parseInt(per);

//  var hypotenuse = outer(b,p);
//  document.write(hypotenuse);

// 	function outer(b,p)
// 	{  
//     	function inner(square)
//         {  
//            return  square * square;
//         } 
//         var base_square = inner(b); 
//         var per_square = inner(p); 
//         var hypotenuse = base_square + per_square;

//          var hypo_square = inner(hypotenuse); 
//          return hypo_square;
//     } 







    //Question#09


//  var width = prompt("Enter width");
//  var height = prompt("Enter height");

//  var w = parseInt(width);
//  var h = parseInt(height);

// var rect_area_as_var = calculate_area(w,h);
// var rect_area_as_value = calculate_area(3,4);

// document.write("i) Area of rectangle by passing arguments as variable is: " + rect_area_as_var);
// document.write("<br>ii) Area of rectangle by passing arguments as value is: " + rect_area_as_value);

// function calculate_area(w,h)
// {
// 	return w * h;
// }






// question#10

//  var str = prompt("Enter string to check whether it is palindrome or not");

//  var is_palindrome = check_palindrome(str);

// if(is_palindrome)
//  {
//  	document.write(str + " is palindrome");
//  }
//  else
//  {
//  	 document.write(str + " is not palindrome");
//  }
 
// function check_palindrome(str)
// {
// 	var len = str.length;
// 	var is_match = true;
// 	for(var i = 0; i < len/2; i++)
// 	{
//  		if(str[i] != str[len - 1 - i])
//  		{
//  			is_match = false;
//  			break;
//  		}
//  	}
//  	if(is_match)
//  		return true;
//  	else
//  		return false;
 
// }







// question#11

// var text = prompt("Enter string to capitalize each word");
// var each_word_capitalize = capitalize(text);
// document.write(each_word_capitalize);

// function capitalize(text)
// {

// 	text = text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
// 	return text;
// }




// question12

// var str = prompt("Enter string to capitalize each word");
// var largest = find_largest(str);

// document.write(str);
// document.write("<br>" + largest);

// function find_largest(text)
// {
// 	var lengths  = [];

// 	text = text.split(" ");
// 	var max=0;
// 	for(var i=0 ; i<text.length; i++)
// 	{
//  		lengths.push(text[i].length);
//  		if(text[i].length > max)
//  		{
//  			max = text[i].length;
//  			largest = text[i];
//  		}
// 	}
// 	return largest;

// }



// question13

// var str = prompt("Enter string");
// var ch = prompt("Enter character to count in the string");

// var count = count_character(str,ch);
// document.write("Occurrence of <b>" + ch + "</b>  in  <b>" + str + "</b>  is " + count);

// function count_character(str,ch)
// {
// 	var count = 0;
// 	for(var i=0; i<str.length ; i++)
// 	{
// 		if(str[i] == ch)
// 			count++;
// 	}
// 	return count;
// }





// question14
var rad = prompt("Enter radius");
var pi = 3.14;

var radius = parseInt(rad);

var circumference = calc_circumference(radius);
var area = calc_area(radius);

document.write("The circumference is <b>" + circumference.toFixed(2) + "</b><br>");
document.write("The area is <b>" + area.toFixed(2) + "</b>");


function calc_circumference(radius)
{

	return (2*pi*radius)

}
function  calc_area(radius)
{
	return (pi*radius*radius);
}








