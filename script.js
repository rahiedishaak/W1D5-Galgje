//maak een array met namen
var words = [ 
    "affenpinscher",
    "akita",
    "basenji",
    "beagle",
    "beauceron",
    "bergamasco",
    "chihuahua",
    "greyhound",
    "leonberger",
    "Poedel",
];

//kiezen van een random naam
/*Math.floor(Math.random() * words.length);     // geeft een woord terug met de lengte van dat woord*/
var word = words[Math.floor(Math.random() * words.length)];

// Split random word from array into letters, but first the word to lowercase
const splitWord = function(word) {
    word = word.toLowerCase();
    return word.split('');
};

let wordToBeGuessed = splitWord(word);

// render underscore in DOM for each letter
const lettersElement = document.querySelector('#letters');

wordToBeGuessed.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = '_';
    lettersElement.appendChild(span);    
});