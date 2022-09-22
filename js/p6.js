vowelcomp = (vowelword) => {
    vowelword = word;
    vowels = [];
    for(i = 0; i < word.length; i++){
        if (word[i] == "a" || word[i] == "e" || word[i] == "i"
         || word[i] == "o" || word[i] == "u" || word[i] == "y" ){
            vowels.push(word[i]);
        }
    }
    vowelcount = vowels.length;
    return vowelcount;
}
palindro = (word) => {
   const len = word.length;
   const lower = word.toLowerCase();
   for (let i = 0; i < len / 2; i++) {
    if (lower[i] !== lower[len - 1 - i ]){
        return 'is not';
    }
   }
   return 'is';
}

const word = prompt("Please enter a string: ");

const f = palindro(word);
const x = vowelcomp(word);

console.log (`${word} contains ${x} vowel(s) and ${f} a palindrome`);
