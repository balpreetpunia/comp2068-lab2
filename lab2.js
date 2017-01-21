/*


The return function worked properly in code academy but fails to 
print in jsbin. Hence the console.log(" ") for each output in 
line comments.


*/console.log("Welcome to the game");
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
console.log("Computer: " + computerChoice);
console.log("User: " + userChoice);
var compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
      //console.log("The result is a tie!");
    }
    else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return "rock wins";
          //console.log("rock wins");
        }
        else{
            return "paper wins";
          //console.log("paper wins");
        }
    }
    else if(choice1 === "scissors"){
        if(choice2 === "rock"){
            return "rock wins";
          //console.log("rock wins");
        }
        else{
            return "scissors wins";
          //console.log("scissors wins");
        }
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return "paper wins";
          //console.log("paper wins");
        }
        else{
            return "scissors wins";
          //console.log("scissors wins");
        }
    }
    else{
        return "please enter an appropriate choice.";
      //console.log("please enter an appropriate choice.");
    }
    
}
compare(userChoice,computerChoice);