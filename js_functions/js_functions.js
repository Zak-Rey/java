function add (a, b) {
    return a + b;
}

let number1 = parseFloat(prompt('Enter the first number: '));
let number2 = parseFloat(prompt('Enter the second number: '));

let result = add(number1, number2);

console.log("The sum is " + result);