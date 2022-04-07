/*
js dynamically type language implies that variable does not associated with type
Js has primitive data type and complex data type.
complex - object
primitive = null, undefined, number, string, boolean, symbol, bigint
by using typeof() function we get the type of data.
*/

// when a variable is decalred but not initialized, it is undefined, exp:
let counter;
console.log("type of counter: "+typeof(counter)); //undefined

//null is another primitive type which has only null value. In js is it equal to undefined
let page = null;
console.log("type of page: "+typeof(page)); //null
console.log(page==undefined) // true
// null is eq to undefined but not strictly equivalent(type and value). like-
console.log(page===undefined) //false

/* NaN is Not a Number. It is a special numeric value that
 indicates an invalid number. Like string can not be divisible by number. like
 */
console.log('a'/2) //NaN
// NaN is not eq to any value including self. like
console.log(NaN==NaN) //false
// Any operation with NaN returns NaN. like
console.log(NaN * 2) // NaN

// To get the max, min, infinity value from number, we need to 
console.log(2/0) // Infinity
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE + Number.MAX_VALUE) // INFINITY

// Already know about string and number so excluded from here.

/* Symbol- In ES6 symbol is another data type.
Symbol does not have any literal form. Each time symbol calls,
a new unique value is created */
let s1 = Symbol();
console.log('s1 type ' + typeof(s1)) // Symbol

/* Bigint is whole number bigger than 2^(53) - 1.
 To form this 'n' is added to the last */
 let bigintt = 900n;
 console.log(typeof(bigintt)); // bigint
 
