function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(){
    let operand1 = parseInt(prompt("Enter first number"));
    let operand2 = parseInt(prompt("Enter second number"));
    let calculate = prompt("Type in an operation");

    switch(calculate){
        case "add" :
            console.log(add(operand1, operand2));
            break;
        case "subtract" :
            console.log(subtract(operand1, operand2));
            break;
        
        case "multiply" : 
            console.log(multiply(operand1, operand2));
            break;
        
        case "divide" :
            console.log(divide(operand1, operand2));
            break;

        default:
            console.log("That isn't an operation");
    
    }

}

operate();