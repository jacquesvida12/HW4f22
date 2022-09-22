const FtoC = (farenheit) => {
    farenheit = Number(prompt("Please enter the current farenheit"));
    celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}
FtoC();
console.log(celsius);