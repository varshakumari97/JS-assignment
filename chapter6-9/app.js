// question#01
var a = +prompt("please enter a number");
document.write("<h3>Result</h3>");
document.write("value of a is: "+ a);
document.write("<br>");
document.write("...............................");
document.write("<br>");

++a;
document.write("the value of ++a:"+ a);
document.write("<br>");
document.write("now the value of a is: "+ a);

document.write("<br>");
document.write("<br>");

document.write("the value of a++:"+ a);
a++;

document.write("<br>");
document.write("now the value of a is: "+ a);

document.write("<br>");
document.write("<br>");

--a;
document.write("the value of --a: "+ a);
document.write("<br>");
document.write("now the value of a is: "+ a);

document.write("<br>");
document.write("<br>");

document.write("the value of a--: "+ a);
a--;

document.write("<br>");
document.write("now the value of a is: "+ a);
document.write("<br>");
document.write("<br>");

// question#02
var a=2, b=1;
var result =--a - --b + ++b + b--;
document.write(result);
document.write("<br>");
document.write("--a: decrease the value of a by 1 and now the value of a will be 1");
document.write("<br>");
document.write("--a - --b: decrease the value of b by 1 and now the value of b will be 0 and it becomes 1-0=1");
document.write("<br>");
document.write("(--a - --b + ++b): ++b first increments the value of b and then print so value of b will be 1 and 1-0+1=2 ");
document.write("<br>");
document.write("(--a - --b + ++b + b--):  b-- first print the value that it stays same that is 1 so 1-0+1+1=3" );
document.write("<br>");
document.write("<br>");
document.write("<br>");



// question#03
var name=prompt("please enter your name");
document.write("Welcome "+ name);

document.write("<br>");
document.write("<br>");




// question#04

var num=prompt("please enter a number");
if(num==""){
    for(var i=1; i<=10; i++){
        document.write(i+"x"+"5"+"="+"5"*i);
    document.write("<br>");
    }
    
}
else{
    for(var i=1;i<=10;i++){
        document.write(i+"x"+num+"="+ num*i);
    document.write("<br>");
    }
    

}

document.write("<br>");
document.write("<br>");




// question#05
var sub1=prompt("enetr subject one");
var sub2=prompt("enetr subject two");
var sub3=prompt("enetr subject three");
var MarksOfSub1=100;
var MarksOfSub2=100;
var MarksOfSub3=100;
var totalMarksOfAll= MarksOfSub1+MarksOfSub2+MarksOfSub3;
var obtainedMarks1=+prompt("enter your marks for subject one  here ");
var obtainedMarks2=+prompt("enter your marks for subject two  here ");
var obtainedMarks3=+prompt("enter your marks for subject three  here ");
var totalMarks = obtainedMarks1+obtainedMarks2+obtainedMarks3;
var percentage1=(obtainedMarks1/MarksOfSub1)*100;
var percentage2=(obtainedMarks2/MarksOfSub2)*100;
var percentage3=(obtainedMarks3/MarksOfSub3)*100;
var totalPercentage = percentage1+percentage2+percentage3;
document.write("<table>");
document.write("<tr>");
document.write("<th>");
document.write("Subject");
document.write("</th>");
document.write("<th>");
document.write("Total marks");
document.write("</th>");
document.write("<th>");
document.write("Obtained marks");
document.write("</th>");
document.write("<th>");
document.write("Percentage");
document.write("</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(sub1);
document.write("</td>");
document.write("<td>");
document.write(MarksOfSub1);
document.write("</td>");
document.write("<td>");
document.write(obtainedMarks1);
document.write("</td>");
document.write("<td>");
document.write(percentage1+"%");
document.write("</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>");
document.write(sub2);
document.write("</td>");
document.write("<td>");
document.write(MarksOfSub2);
document.write("</td>");
document.write("<td>");
document.write(obtainedMarks2);
document.write("</td>");
document.write("<td>");
document.write(percentage2+"%");
document.write("</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>");
document.write(sub3);
document.write("</td>");
document.write("<td>");
document.write(MarksOfSub3);
document.write("</td>");
document.write("<td>");
document.write(obtainedMarks3);
document.write("</td>");
document.write("<td>");
document.write(percentage3+"%");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>");
document.write("</th>");
document.write("<th>");
document.write(totalMarksOfAll);
document.write("</th>");
document.write("<th>");
document.write(totalMarks);
document.write("</th>");
document.write("<th>");
document.write(totalPercentage);
document.write("</th>");
document.write("</tr>");




document.write("</table>");




