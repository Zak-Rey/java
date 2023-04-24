//used in decision making, it evaluates an expression and excecutes the corresponding body that matches the expression's result.
let a = 2;

switch (a) {
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);