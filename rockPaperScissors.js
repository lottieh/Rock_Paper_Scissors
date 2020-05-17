let player = "paper";
console.log("You picked ", player)

let options = ["rock", "paper", "scissors"];
computerPick = options[Math.floor(Math.random() * options.length)]
console.log("I picked ", computerPick)

if ((player === ("rock"||"Rock")) && (computerPick === "paper")) {
    response = "Paper beats rock, you lose ! "

} else if ((player ===("rock"||"Rock")) && (computerPick === "scissors")) {
    response = "Rock beats scissors, you win !"

} else if ((player === ("paper"||"Paper")) && (computerPick === "rock")) {
    response = "Paper beats rock, you win ! "

} else if ((player === ("paper"||"Paper")) && (computerPick === "scissors")) {
    response = "Scissors beat paper, you lose !"
} else if ((player === ("scissors"||"Scissors")) && (computerPick === "rock")) {
    response = "Rock beats scissors, you lose !"
} else if ((player === ("scissors"||"Scissors")) && (computerPick === "paper")) {
    response = "Scissors beat paper, you win !"
} else if ((player === computerPick)) {
    response = "We picked the same, it's a tie"
} else {
    response = "I don't think that us is a valid choice"
}
console.log(response)






