function game() {
    const items =  {
        rock: ['scissors'], paper: ['rock'], scissors: ['paper']
    }

    function randomItem () {
        const itemChoices = Object.keys(items);
        return itemChoices [Math.floor(Math.random() * itemChoices.length)];
    }

    function playerPrompt() {
        let prompt = window.prompt("Enter 'Rock', 'Pape' or 'Scissors :");
        while(!Object.keys(items).includes(prompt)) {
            prompt = window.prompt("Please enter 'Rock', 'Paper', or 'Scissors' only:");
        }
        return prompt;
    }

    let playerChoice = playerPrompt();
    const aiChoice = randomItem();

    function determineWinner() {
        console.log('Player chooses: ${playerChoice}');
        console.log('Computer chooses: ${aiChoice}');
        if (aiChoice === playerChoice) {
            return "It's a Tie!"
        } else {
            return items[aiChoice].includes(playerChoice) ? 'Computer Won!' : 'Player Won!';
        }
    }

    return determineWinner()
}

console.log(game());