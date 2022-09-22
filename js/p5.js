getwords = (word) => {
    wordArray = [];
    word = "x";
    while (word.toLowerCase() != "stop"){
        word = prompt("Enter all desired words and type stop when you are finished")
        if (word.toLowerCase() == "stop")
        {
            console.log("You have entered stop, the program will now end")
        } else {

            wordArray.push(word);
        }
    }
}
getwords();
console.log(`You had entered the following words: ${wordArray} `)