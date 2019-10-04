// Split random word from array into letters, but first the word to lowercase
const splitWord = function(word) {
    word = word.toLowerCase();
    return word.split('');
};

let wordToBeGuessed = splitWord('Hallo');