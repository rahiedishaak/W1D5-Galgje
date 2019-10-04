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
/*Math.floor(Math.random() * words.lenght);     // geeft een woord terug met de lengte van dat woord*/

var words = [words[Math.floor(Math.random() * words.lenght)]];

/*het antwoord = []; 
dus als i=0 en i= kleiner dan de word lengte dan i+1 */

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  
  var remainingLetters = word.length;