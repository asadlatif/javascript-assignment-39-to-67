// ch 38 - 44

// Question Node. 1
var a,b,p;
function power(a,b){
    p = Math.pow(a,b)
    alert(p)

}

// question no 2

function myFunction() {
    var year = +prompt("Please enter any year", "2014");
    if (year === (2012 || 2016 || 2020 )) {
      document.getElementById("demo").innerHTML =
      "  " + year + " is a leap year ";
    }else{
        document.getElementById("demo").innerHTML = " " + year + " is not a leap year ";
    }
  }

//   question no 3
function area(){
var side1 = prompt("enter one value ", "5"); 
var side2 = prompt("enter second value ", "7");; 
var side3 = prompt("enter third value ", "6");; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
document.getElementById("result").innerHTML = "Area of Triangle is: " + area + " ....";
}