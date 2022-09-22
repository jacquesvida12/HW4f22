const myCalculator = (num1, num2, numop) => {
    num1 = Number(prompt("Please enter a number:"))
    num2 = Number(prompt("Please enter a number:"))
    numop = prompt("Please enter a mathematical operation")
    switch (numop) {
        case "*":
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case "/":
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
            
    }
}
myCalculator();