const readline = require('readline');

let player = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

player.question('Rock, Paper or Scissors? ', (answer) => {
  // TODO: Log the answer in a database
  console.log("You picked ", player)

let playerLower = player.toLowerCase();
console.log(playerLower)

let options = ["rock", "paper", "scissors"];
computerPick = options[Math.floor(Math.random() * options.length)]

console.log("I picked ", computerPick)

if ((playerLower === "rock") && (computerPick === "paper")) {
    response = "Paper beats rock, you lose ! "

} else if ((playerLower=== "rock") && (computerPick === "scissors")) {
    response = "Rock beats scissors, you win !"

} else if ((playerLower === "paper" ) && (computerPick === "rock")) {
    response = "Paper beats rock, you win ! "

} else if ((playerLower === "paper" ) && (computerPick === "scissors")) {
    response = "Scissors beat paper, you lose !"
} else if ((playerLower === "scissors" ) && (computerPick === "rock")) {
    response = "Rock beats scissors, you lose !"
} else if ((playerLower === "scissors" ) && (computerPick === "paper")) {
    response = "Scissors beat paper, you win !"
} else if ((playerLower === computerPick)) {
    response = "We picked the same, it's a tie"
} else {
    response = "I don't think that is a valid choice!"
}
console.log(response)
  console.log(`Thank you for your valuable feedback: ${answer}`);

  player.close();
});




// // let player = "Rock"; //Please insert your choice here 

// console.log("You picked ", player)

// let playerLower = player.toLowerCase();
// console.log(playerLower)

// let options = ["rock", "paper", "scissors"];
// computerPick = options[Math.floor(Math.random() * options.length)]

// console.log("I picked ", computerPick)

// if ((playerLower === "rock") && (computerPick === "paper")) {
//     response = "Paper beats rock, you lose ! "

// } else if ((playerLower=== "rock") && (computerPick === "scissors")) {
//     response = "Rock beats scissors, you win !"

// } else if ((playerLower === "paper" ) && (computerPick === "rock")) {
//     response = "Paper beats rock, you win ! "

// } else if ((playerLower === "paper" ) && (computerPick === "scissors")) {
//     response = "Scissors beat paper, you lose !"
// } else if ((playerLower === "scissors" ) && (computerPick === "rock")) {
//     response = "Rock beats scissors, you lose !"
// } else if ((playerLower === "scissors" ) && (computerPick === "paper")) {
//     response = "Scissors beat paper, you win !"
// } else if ((playerLower === computerPick)) {
//     response = "We picked the same, it's a tie"
// } else {
//     response = "I don't think that is a valid choice!"
// }
// console.log(response)






