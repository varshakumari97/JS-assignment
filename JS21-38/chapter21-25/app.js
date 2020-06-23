// question#01....................................

// var firstName =prompt("Enter first name ");
// var lastName =prompt("Enter last name ");
// var fullName= firstName + " "+ lastName;
// document.write("Welcome "+ fullName);



// question#02.............................................................

// var fav =prompt("What is your favourite mobile phone model?");
// var lengthOfFav=fav.length;
// document.write("My favourite mobile phone model is: "+fav+"<br>");
// document.write("Length of string is: "+lengthOfFav);


// question#03....................................

// var string = "Pakistani";
// var index = string.indexOf('n');
// document.write("String: "+string+"<br>");
// document.write("Index of 'n' is: "+index);


// question#04.........................................

// var str = "Hello World";
// var ind = str.lastIndexOf('l');
// document.write("String: "+str+"<br>");
// document.write("Index of 'l' is: "+ind);



// question#05....................................

// var string = "Pakistani";
// var index = string.charAt(3);
// document.write("String: "+string+"<br>");
// document.write("Character at index 3 is: " +index);



// question#06....................................

// var firstName =prompt("Enter first name ");
// var lastName =prompt("Enter last name ");
// var fullName= firstName.concat(lastName);
// document.write("Welcome " + fullName);


// question#07....................................

// var str ="Hyderabad";
// var rep =str.replace("Hyder","Islam");
// document.write("City: " + str + "<br>");
// document.write("After replacement: " + rep);



// question#08....................................

// var message = "Ali and Sami are best friends. They play cricket and footbal together. ";
// var rep= message.replace(/and/g,'&');
// document.write(message+"<br>")
// document.write("After replacement: " + "<b>" + rep + "</b>");


// question#09....................................

// var str ="472";
// var num = parseInt(str);
// document.write("<b>");
// document.write("value: "+str+"<br>");
// document.write("Type: "+ typeof str + "<br>");

// document.write("value: "+num+"<br>");
// document.write("Type: "+ typeof num );
// document.write("</b>");



// question#10....................................
// var userInput =prompt("Enter string");
// var upperCase= userInput.toUpperCase();
// document.write("User input: "+userInput+"<br>")
// document.write("UPPER CASE: "+upperCase);




// question#11....................................
// var userInput =prompt("Enter string");

// var firstChar= userInput.slice(0,1);
// firstChar=firstChar.toUpperCase();

// var otherChar= userInput.slice(1);
// otherChar=otherChar.toLowerCase();

// var titleCase= firstChar+otherChar;
// document.write("User input: "+userInput+"<br>")
// document.write("TITLE CASE: "+titleCase);



// question#12....................................

// var number =35.39;

// number = number.toString();
// newNum=number.split('.').join("");
// document.write("Number: "+ number + "<br>");
// document.write("Result: "+ newNum);





// question#13....................................

//var is_special = false;
// var user_name = prompt("Enter username");
// for(var i = 0; i < user_name.length; i++)
// {
// 	if(user_name.charCodeAt(i) == 33 || user_name.charCodeAt(i) == 44 || user_name.charCodeAt(i) == 46 || user_name.charCodeAt(i) == 64)
// 	{
// 		document.write("Enter valid username");
// 		is_special = true;
// 		break;
// 	}
// }
// if(!is_special)
// {
// 	document.write("Welcome " + user_name);
// }













// question#14...........

// var is_match = false;

	// var ABC_bakery = ["cake","apple pie","cookie","chips","patties"];

	// var item=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

	// for(var i=0; i<ABC_bakery.length; i++)
	// {
	// 	if(item == ABC_bakery[i])
	// 	{
	// 		is_match = true;
	// 		break;

	// 	}
	// }
	// if(is_match)
	// 	document.write(item + " is <b>available</b> at index " + i + " in our bakery");
	// else
	// 	document.write("We are sorry. "+ item + " is <b>not available</b> in our bakery");



































// question15

// var password =  "varsha123";
	// var temp = password.charCodeAt(0);
	
	// if(password.length < 6)
	// {
	// 	document.write("Password must atleast 6 characters long <br>Please enter a valid password");	
	// }
	// else if(temp >= 48 && temp <=57)
	// {
	// 	document.write("Password cannot begin with a number <br>Please enter a valid password");
			
	// }
	// else
	// {
	// 	var is_number = false;
	// 	for(var i = 1; i < password.length; i++)
	// 	{
	// 		if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
	// 		{
	// 			is_number=true;
	// 		}
	// 	}
	// 	if(is_number)
	// 	{
	// 		document.write("Valid Password");	
	// 	}
	// 	else
	// 	{
	// 		document.write("Password should contain alphabets and numbers <br>Please enter a valid password");	
	// 	}
	// }

	






// question#16..................
// var university = "U\nn\ni\nv\ne\nr\ns\ni\nt\ny\n o\nf\n K\na\nr\na\nc\nh\ni\n";
// var res = university.split("<br>");
// document.write(res);

// var str="How\nare\nyou\ndoing\ntoday?";
// var n = str.split("\n");
// for(var x in n){   
//     n[x]= "<br>"+n[x]; 
//     document.write(n[x]);
// }



// question#17..................

// var str = prompt("enter ");
// var res = str.charAt(str.length-1);
// document.write("User input is: "+ str+"<br>");
// document.write("Last character of "+str + " is: "+ res);


// question#18..................

// var str = "The quick brown fox jumps over the lazy dog";
// 	var len = str.length;
// 	document.write(len + "<br>");
// 	var count=0;
// 	for(var i = 0 ; i<len-2; i++)
// 	{

// 		if((str[i] == 'T' || str[i] == 't') && (str[i+1] == 'H' || str[i+1] == 'h') && (str[i+2] == 'E' || str[i+2] == 'e'))
// 			count++;
			
// 	}

// 	document.write("Text: The quick brown fox jumps over the lazy dog<br>")
// 	document.write("There are " + count + " occurrences of word 'the'");




