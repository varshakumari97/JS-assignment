// Question#01
document.write("<h1>mathematical expression</h1>");

var a= 2;
var b= 5;
var c = a+b;
document.write( "sum of " + a + " and " + b + " is " + c);
document.write("<br>");
document.write("<br>");



// Question#01
// subtraction
var a= 7;
var b= 5;
var c = a-b;
document.write( "subtraction of " + a + " and " + b + " is " + c);
document.write("<br>");

// multiplication
var a= 7;
var b= 5;
var c = a*b;
document.write( "multiplication of " + a + " and " + b + " is " + c);
document.write("<br>");

// division
var a= 7;
var b= 5;
var c = a/b;
document.write( "division of " + a + " and " + b + " is " + c);
document.write("<br>");

// modulus
var a= 7;
var b= 5;
var c = a%b;
document.write( "modulus of " + a + " and " + b + " is " + c);
document.write("<br>");
document.write("<br>");


// question#03

// a............
var a;
// b................................................
document.write("value after variable declaration is: " + a);
document.write("<br>");
// c............
var a = 5;
// d..........................................
document.write("initial value is: "+ a);
document.write("<br>");
// e.......
++a;
// f.........................................
document.write("value after increment is: "+ a);
document.write("<br>");
// g..............................................
var x= a+7;
// h....................................................
document.write("value aftr addition is: "+ x);
document.write("<br>");
// i.............................................
--x;
// j..........................................
document.write("value after increment is: "+ x);
document.write("<br>");
// k.......................
 var z= x%3;
// l................
document.write("reminder is: "+ z);
document.write("<br>");
document.write("<br>");
document.write("<br>");





// question#05...........
var cost =600;
var costOf5 = cost* 5;
document.write("Total cost to buy 5 tickets to a movie is:  " + costOf5 + "PKR" );
document.write("<br>");
document.write("<br>");


// question#06
document.write("<h1>table of 5</h1>");


var num=5;
for (var i=1; i<=10; i++){
    document.write(i + "x" + num +"=" + num*i);
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");



// question#06
document.write("<h1>tempreture converter</h1>");

var c1= 30;
var f = (c1*9/5)+32;
var f1=86;
var c=(f1-32)*5/9
document.write(c1 + "°C "+"is "+ f+"°F");
document.write("<br>");
document.write(f1 +"°F " + "is " +c+"°C");
document.write("<br>");


// question#07
document.write("<h1>Shopping Cart</h1>"); 
var price1 = 650;
var quantity1 = 3;
var item3= price1*quantity1;
var price2 = 100;
var quantity2 =7;
var item7= price2*quantity2;
var charges= 100;
var total= item3+item7+charges;
document.write("Total cost of your order is " + total);

document.write("<br>");
document.write("<br>");


// question#08
document.write("<h1>Marksheet</h1>");
var totalMarks= 1150;
var obtainedMarks= 800;
var percentage = (obtainedMarks/totalMarks)*100;
document.write("Total marks: " + totalMarks);
document.write("<br>");
document.write("Marks obtained: " + obtainedMarks);
document.write("<br>");
document.write("Percentage: " + percentage + "%");
document.write("<br>");
document.write("<br>");


// question#09
document.write("<h1>Currency in PKR</h1>");
var dollars=10;
var saudiRiyals=25;
var PKR =(dollars*104.80)+(saudiRiyals*28);
document.write("Total currency in PKR: "+ PKR);

document.write("<br>");
document.write("<br>");



// question#10
document.write("<h1>Math expression</h1>");
var num=5;
var total=((num+5)*10)/2;
document.write(total);

document.write("<br>");
document.write("<br>");



// question#11
document.write("<h1>Age Calculator</h1>");
var currentYear= 2020;
var birthYear= 1997;
var age= currentYear-birthYear;
document.write("Current Year: "+ currentYear);
document.write("<br>");
document.write("Birth Year: "+ birthYear);
document.write("<br>");
document.write("Your age is: "+ age);
document.write("<br>");
document.write("<br>");


// question#12
document.write("<h1>The Geometrizer</h1>");
var radius= 20;
var circumference = 2*3.142*radius;
var area= (3.142)*radius**2;
document.write("radius of circle is: "+ radius);
document.write("<br>");
document.write("the circumfernce is: "+ circumference);
document.write("<br>");
document.write("area of circle is : "+ area);
document.write("<br>");
document.write("<br>");


// question#13
document.write("<h1>The Lifetime Supply Calculator:</h1>");
var snack ="chips";
var currentAge=23;
var maxAge= 60;
var snackAmount= 2;
var total = (maxAge-currentAge)*snackAmount;
document.write("you will need "+ total +" " + snack +" to last you until the rip old age of "+ maxAge)






