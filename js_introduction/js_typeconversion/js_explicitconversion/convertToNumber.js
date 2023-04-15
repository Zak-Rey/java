let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

//empty strings and null return 0

let result;
result = Number(null);
console.log(result); //0

let result; = Number(' ');
console.log(result); //0

//if a string is an invalid number or undefined, NaN is returned.
let result;
result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN


