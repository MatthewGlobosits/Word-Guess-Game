var userChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var movieNames = ["backtothefuture", "footloose","thegoonies","topgun"];

var blankMovieName = "_________";
// var randNum = Math.floor(Math.random() * movieNames.lenght);
// var chooseWord = [randNum];
// var underScore = [blankMovieNames]

var userChoiceText = document.getElementById("userGuess");
var movieName = movieNames[Math.floor(Math.random() * movieNames.length)];
console.log(movieName)
var answerDashes = [];
    for (var i = 0; i < movieName.length; i++) {
        answerDashes[i] = "_";
    }
   console.log(answerDashes)

   var marty = document.getElementById("movie")
   marty.innerHTML = answerDashes.join(" ");

   var wins = 0;
   var docBrown = document.getElementById("winCount");
    docBrown.innerHTML = wins;

  
    var guessesRemaining = 12;
    var remainingGuesses = document.getElementById("guessesRemaining");
    remainingGuesses.innerHTML = guessesRemaining;
    

    var guess = []
    var guessed = document.getElementById("userGuess");

document.onkeyup= function(event){
    var userGuess = event.key;
   
  
    var letterIndex = movieNames.indexOf(userGuess);
    if (letterIndex !== -1){ 
    //    alert("GREAT SCOTT! THATS CORRECT!")  
       
       
       var array = blankMovieName.split("");
       array.splice(letterIndex,1,movieNames[letterIndex])
       blankMovieName = array.join("");
        
    }

    else{
        alert("OUCH THATS HEAVY... WRONG ANSWER!")
    } 
   

    
     document.getElementById("userGuess").innerHTML += userGuess;
    
}




// document.addEventListener('keypress', (event) => {
//     var keyWord = String.fromCharCode(event.keyCode);
//         //  console.log(userGuess.indexof(keyWord))
//         if(userGuess.indexof(userGuess) > -1)  {
//             console.log(true)
//     }
    
    
// });




