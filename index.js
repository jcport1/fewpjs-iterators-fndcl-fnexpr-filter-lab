// Code your solution here

//write a function to case-insentively match stringS
//this function takes an array of drivers and a string as arguments, and return the matchling list of drivers.
//The function should be case insensitive 

function findMatching(source, sought) {
    return source.filter ( possibleMatch => 
        possibleMatch.toLowerCase() === sought.toLowerCase()
        )
}

function fuzzyMatch (source, testString) {
    return source.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0 )
}

function matchName (source, soughtName) {
    return source.filter( possibleMatch =>
        possibleMatch.name === soughtName )
}

