const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
let min = values[0];
let max = values[0];
for (var i = 0; i < values.length; i++) {
    sum += values[i];
    if (values[i] < min){
        min = values[i]
    }
    if (values[i] > max){
        max = values[i]
    }

    }
console.log(`The array is set to: ${values}`)
console.log(`The Sum of the array is ${sum}`);
console.log(`The Min value of the array is ${min}`);
console.log(`The Max value of the array is ${max}`);