let balance = 0;

const symbols = ['🍒', '🍋', '🍊', '🍇', '💎', '7️⃣'];

function updateBalance(amount) {
    balance = amount;
    document.getElementById('balance-amount').textContent = balance.toFixed(2);
}

function spinSlotMachine(bet) {
    const result = [];
    for (let i = 0; i < 3; i++) {
        result.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    return { result, winnings: calculateWinnings(result, bet) };
}

function calculateWinnings(result, bet) {
    if (result[0] === result[1] && result[1] === result[2]) {
        return bet * 10;
    } else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
        return bet * 2; 
    }
    return 0;
}

document.getElementById('deposit-button').addEventListener('click', () => {
    const deposit = parseFloat(prompt("How much money would you like to deposit?"));
    if (!isNaN(deposit) && deposit > 0) {
        updateBalance(balance + deposit);
    }
});

document.getElementById('spin-button').addEventListener('click', () => {
    const betAmount = parseFloat(document.getElementById('bet-amount').value);
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
        alert("Invalid bet amount!");
        return;
    }

    updateBalance(balance - betAmount);
    const { result, winnings } = spinSlotMachine(betAmount);
    
    document.getElementById('slot-machine').textContent = result.join(' ');
    
    if (winnings > 0) {
        document.getElementById('result').textContent = `Congratulations! You won $${winnings.toFixed(2)}!`;
        updateBalance(balance + winnings);
    } else {
        document.getElementById('result').textContent = `Sorry, you lost $${betAmount.toFixed(2)}.`;
    }
    
    if (balance <= 0) {
        alert("Game over. You're out of money!");
        document.getElementById('spin-button').disabled = true;
    }
});