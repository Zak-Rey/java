//used in decision making, it evaluates an expression and excecutes the corresponding body that matches the expression's result.
let result;

const operator = prompt('Enter operator (either -, +, * , /');

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    default:
        console.log('Invalid operator');
        break;
}