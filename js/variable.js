var x = 10;
var y = 20;
var total = x + y;
console.log("for older version of js var is used. exp: total")
document.getElementById("var").innerHTML = "Using Var:\
 var x = 10, var y = 20, total: " + total;

const pi = 3.1416;
let radius = 3.5;
circle_area = pi * Math.pow(radius, 2);
document.getElementById("const-let").innerHTML = "Using const, let:\
 const pi: 3.1416, let radius: 3.5, area: " + circle_area;

/* Numeric separator makes number readable, _(underscore) allows 
to make numeric separator */
const max_val = 120_00_000
console.log('numeric separator ' + max_val)
