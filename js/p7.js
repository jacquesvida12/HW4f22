const rnd = Math.floor((Math.random() * 100) + 1);
var guess;
let count = 0;
console.log(`For code review purposes the answer is ${rnd}`);

while (guess != rnd){
    guess = Number(prompt(`Please enter correct number`));
    count++;
    if (guess < rnd){
        console.log("Your guess was too low, please guess again")
    }else {
        console.log("Your guess was too high, please guess again")
    }
    }
 console.log(`Correct! It took you ${count} attempts to guess the correct number: ${rnd}`);       
    


