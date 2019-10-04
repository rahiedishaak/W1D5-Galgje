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

