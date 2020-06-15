// Question#01
var empty =[[],[],[],[]];
for(var i=0; i<4 ;i++){
    for(var j=0;j<4;j++){
        document.write(empty[i][j]+ " ");
       

    }
    document.write("<br>");
}

document.write("<br>");

// Question#02

var empty =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i=0; i<3;i++){
    for(var j=0;j<4;j++){
        document.write(empty[i][j]+ " ");
       

    }
    document.write("<br>");
}

document.write("<br>");

// Question#03
var empty =[[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];
for(var i=0; i<10;i++){

        document.write(empty[i]+ " <br>");
       

    

}

document.write("<br>");

// Question#5
var fruits=["apple","banana","mango","orange","strawberry"];
for(var i=0;i<5;i++){
document.write(fruits[i]+"<br>");

}
document.write("<br>");
document.write("Element at at index 0 is "+fruits[0]+"<br>");
document.write("Element at at index 1 is "+fruits[1]+"<br>");
document.write("Element at at index 2 is "+fruits[2]+"<br>");
document.write("Element at at index 3 is "+fruits[3]+"<br>");
document.write("Element at at index 4 is "+fruits[4]+"<br>");

document.write("<br>");
document.write("<br>");
document.write("<br>");



// question#08

var arr=[24,53,78,91,12];
var max= arr[0];
for(var i=0 ;i<arr.length; i++){
    if(arr[i]>=max){
        max=arr[i];
    }
}
document.write("Array items: "+arr+"<br>");
document.write("Largest number is:" + max+"<br>");
    
document.write("<br>");
document.write("<br>");
// question#09

var arr=[24,53,78,91,12];
var min= arr[0];
for(var i=0 ;i<arr.length; i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
document.write("Array items: "+arr+"<br>");
document.write("smallest number is:" + min+"<br>");

