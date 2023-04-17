const number = prompt("Enter a number: ");

if (number >= 0){
    if (number == 0) {
        console.log("You entered zero");
    }else{
        console.log("You entered a positive value");
    }
}else{
    console.log("You entered a negative number");
}