var userChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var movieName ="footloose";
var guess = 0;
var blankMovieName = "_________";
// var randNum = Math.floor(Math.random() * movieNames.lenght);
// var chooseWord = [randNum];
// var underScore = [blankMovieNames]

var userChoiceText = document.getElementById("userGuess");

document.onkeyup= function(event){
    var userGuess = event.key;
    // console.log(userGuess)
  
    var letterIndex = movieName.indexOf(userGuess);
    if (letterIndex !== -1){ 
    //    alert("GREAT SCOTT! THATS CORRECT!")  
       
       
       var array = blankMovieName.split("");
       array.splice(letterIndex,1,movieName[letterIndex])
       blankMovieName = array.join("");
        console.log(blankMovieName)
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




