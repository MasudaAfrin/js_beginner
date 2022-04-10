/*
Js arithmatic operators are = +, -, /, *
*/
let sum = 10 + 20;
console.log(`Sum of two numbers: ${sum}`);

let concat = 20 + 'ambar';
console.log(`concat variable is concatanation of 20 and ambar: ${concat}`);

/*let p an object. but we want to evalute its value. In that case we need to
have valueOf or toString function. But valueOf has higher precedence that toString.
It means if both of them exist, toString() will be called first.
*/
let p = { 
    valueOf: function() {
        return 10;
    }
}
let q = { 
    toString: function() {
        return 50;
    }
}
let s = {
    valueOf: function() {
        return 90;
    },
    toString: function() {
        return 10;
    }
}
console.log(`value of s is: ${s}`);
