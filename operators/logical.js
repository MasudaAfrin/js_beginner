/*
Logical operators are helpful to compare variables.
logical or(||), Not(!), And(&&)
*/
logicalOpDom = document.getElementById('logical-op');
logicalOpDom.innerHTML = "<p>NOT(!)</p>"
let a;
console.log(!a); //true as undefined
console.log(!null) //true
console.log(!NaN) //true
console.log(!false) //true
console.log(!'') //true
console.log(!true) //false
console.log(!{}) //false

// !! negate value turns variables real boolean value. like
let cntr = 10;
console.log(!!cntr); //true because !cntr = false and after again negate it, it returns true

// I am not writing about || and &&. Because the concept is same as other programming lang.
/* Precedence of operators are !, &&, ||
&&, || are called short circuited value bacause if it evalutes the second value
only if first one does not suffice to determine the value of expression. like-
*/
a = true;
b = 1/0;
console.log(a && b); // Infinity

a = false;
console.log(a && b); //False, here from first expression it can be said
//that is is false because ||, && opeartors evalute from left to right.