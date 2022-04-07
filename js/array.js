arr = new Array(1, 1, 2, 3);
arr2 = Array(5, 12, 34, 22);
arr3 = [1, 2, 3, 3, 4];
console.log(arr, arr2, arr3);

// push elements to the first position
arr.unshift(100);
console.log(arr);

// push element at the back of Array
arr.push(300);
console.log(arr);

//remove element at the back of Array
last = arr.pop();
console.log(last);

//remove element at the first of Array
first = arr.shift();
console.log(first);

//find index in an arry
console.log(`index of 5 in array2 ${arr2.indexOf(5)}`)

// to check if a value is array
console.log(`is arr2 is an array?: ${Array.isArray(arr2)}`)
