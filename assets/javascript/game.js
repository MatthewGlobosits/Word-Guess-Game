var userChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var movieNames = ["backtothefuture", "footloose","thegoonies","topgun"];

var blankMovieName = "_________";
// var randNum = Math.floor(Math.random() * movieNames.lenght);
// var chooseWord = [randNum];
// var underScore = [blankMovieNames]

var userChoiceText = document.getElementById("userGuess");
var movieName = movieNames[Math.floor(Math.random() * movieNames.length)];
console.log(movieName)
var dashes = [];
    for (var i = 0; i < movieName.length; i++) {
        dashes[i] = "_";
    }
   console.log(dashes)

   var marty = document.getElementById("movie")
   marty.innerHTML = dashes.join(" ");

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
    var delorian = false;
    if (!guess.includes(userGuess)){
        guess.push(userGuess);
        guessed.innerHTML = guess.join(" ");
        delorian = true;
    }

    if (movieName.includes(userGuess)) {
        for (var j = 0; j < movieName.length; j++) {
            if (movieName[j] === userGuess) {
                dashes[j] = userGuess;
              
            } 
    
            marty.innerHTML = dashes.join(" ");
        }
        if (guessesRemaining > 0 && (!dashes.includes("_"))) {
            alert("Totally Tubular! You Won!");
            var audio = new Audio("Hip-to-be-Square.mp3");
        audio.play();
            wins++;
            docBrown.innerHTML = wins;
        } 
    } else {
        if (delorian) {
            guessesRemaining--;
        }
    }
    remainingGuesses.innerHTML = guessesRemaining;

    if (guessesRemaining == 0){
        marty.innerHTML = movieName;
        alert("Gag Me With a Spoon! You got it Wrong!")
    }
    
    
    // document.getElementById("userGuess").innerHTML += userGuess;
  
    // var letterIndex = movieNames.indexOf(userGuess);
    // if (letterIndex !== -1){ 
    // //    alert("GREAT SCOTT! THATS CORRECT!")  
       
       
    //    var array = blankMovieName.split("");
    //    array.splice(letterIndex,1,movieNames[letterIndex])
    //    blankMovieName = array.join("");
        
    // }

    // else{
    //     alert("OUCH THATS HEAVY... WRONG ANSWER!")
    // } 
   

    
     
    
}




// document.addEventListener('keypress', (event) => {
//     var keyWord = String.fromCharCode(event.keyCode);
//         //  console.log(userGuess.indexof(keyWord))
//         if(userGuess.indexof(userGuess) > -1)  {
//             console.log(true)
//     }
    
    
// });




