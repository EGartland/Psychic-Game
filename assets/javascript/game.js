// Variables //
var game = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 1;			
var loss = 1;		
var guessLeft = 8;
	 

function getElementbyId(element){
	var userChoice = document.getElementById(element);
	return userChoice;
} 


document.onkeyup = function(event){


	var gameGuess = Math.floor(Math.random() * game.length),

		
		randomGuess = game[gameGuess],

		userChoice = document.createTextNode(event.key + ", ");

		
		getElementbyId("Guess").appendChild(userChoice);

	
		if(randomGuess === event.key){
			getElementbyId("Win").textContent = "Win: " + win++;
			

			if(win >= 1){
				getElementbyId("Guess-Left").textContent = "Guess Left: " + 9;
				guessLeft = 8;
				
			
				alert("You Won!");
				} 
	} 
		
		else{


			getElementbyId("Guess-Left").textContent = "Guesses Left: " + guessLeft--;

			if(guessLeft <= -1){

				getElementbyId("Loss").textContent = "Losses: " + loss++;
				
		
				alert("You Lost");

				getElementbyId("Guess-Left").textContent = "Guesses Left: " + 9;
				guessLeft = 8;

				}
			} 
		} 