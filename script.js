// Sample phrases with literal translations
const phrases = [
    {
        literal: "To have tomatoes on the eyes",
        original: "Tomaten auf den Augen haben",
        meaning: "To be oblivious or not see something obvious",
        language: "German",
        hints: [
            "It's about not seeing clearly",
            "Think about vision problems",
            "When you miss something obvious",
            "Something is blocking your view",
            "You're blind to the obvious"
        ]
    },
    {
        literal: "To have other cats to whip",
        original: "Avoir d'autres chats à fouetter",
        meaning: "To have other things to do",
        language: "French",
        hints: [
            "It's about being busy with other tasks",
            "You have more important matters",
            "Think about priorities",
            "You're occupied with something else",
            "No time for this right now"
        ]
    },
    {
        literal: "To slide in on a shrimp sandwich",
        original: "Att glida in på en räkmacka",
        meaning: "To have an easy life without working hard",
        language: "Swedish",
        hints: [
            "It's about having things easy",
            "No effort required",
            "Someone who gets lucky without trying",
            "Think about privilege",
            "Success without hard work"
        ]
    },
    {
        literal: "I don't have pasta",
        original: "No tengo pasta",
        meaning: "I don't have money",
        language: "Spanish",
        hints: [
            "Pasta is slang for something else",
            "It's about financial problems",
            "Think about what you need to buy things",
            "Broke or penniless",
            "Can't afford anything"
        ]
    },
    {
        literal: "To sit on your eggs",
        original: "Κάθομαι στα αυγά μου",
        meaning: "To be lazy or do nothing",
        language: "Greek",
        hints: [
            "It's about inactivity",
            "Think of a bird sitting still",
            "Not doing anything productive",
            "Being idle",
            "Just sitting around all day"
        ]
    },
    {
        literal: "To rub the nose",
        original: "A da cu mucul",
        meaning: "To deceive or trick someone",
        language: "Romanian",
        hints: [
            "It's about dishonesty",
            "Someone is being fooled",
            "Think about manipulation",
            "Playing a trick on someone",
            "Making a fool of someone"
        ]
    }
];

let currentPhrase = null;
let attemptsLeft = 5;

// Get DOM elements
const startBtn = document.getElementById('startBtn');
const phraseDisplay = document.getElementById('phraseDisplay');
const inputArea = document.getElementById('inputArea');
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const hintBtn = document.getElementById('hintBtn');
const resultArea = document.getElementById('resultArea');

// Start game button click handler
startBtn.addEventListener('click', function() {
    startGame();
});

// Submit guess button click handler
submitBtn.addEventListener('click', function() {
    checkGuess();
});

// Hint button click handler
hintBtn.addEventListener('click', function() {
    showHint();
});

function startGame() {
    // Pick a random phrase
    currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    attemptsLeft = 5;
    currentPhrase.hintIndex = 0;
    
    // Update the display
    phraseDisplay.innerHTML = `
        <h2>Literal Translation:</h2>
        <p class="phrase-text">"${currentPhrase.literal}"</p>
        <p class="attempts">Attempts left: ${attemptsLeft}</p>
    `;
    
    // Show input area and hide start button
    inputArea.style.display = 'block';
    startBtn.style.display = 'none';
    resultArea.innerHTML = '';
    guessInput.value = '';
    guessInput.focus();
}

function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const actualMeaning = currentPhrase.meaning.toLowerCase();
    
    if (guess === '') {
        resultArea.innerHTML = '<p class="error">Please enter a guess!</p>';
        return;
    }
    
    attemptsLeft--;
    
    // Simple check if guess contains key words from the meaning
    if (guess.includes('oblivious') || guess.includes('busy') || guess.includes('easy') || 
        guess.includes('money') || guess.includes('lazy') || guess.includes('deceive') || 
        guess.includes('trick')) {
        resultArea.innerHTML = `
            <div class="success">
                <h3>🎉 Correct!</h3>
                <p><strong>Actual meaning:</strong> ${currentPhrase.meaning}</p>
                <p><strong>Language:</strong> ${currentPhrase.language}</p>
                <p><strong>Original phrase:</strong> "${currentPhrase.original}"</p>
                <p><strong>Literal translation:</strong> "${currentPhrase.literal}"</p>
            </div>
        `;
        endRound();
    } else if (attemptsLeft > 0) {
        phraseDisplay.querySelector('.attempts').textContent = `Attempts left: ${attemptsLeft}`;
        resultArea.innerHTML = `<p class="error">Not quite! Try again. (${attemptsLeft} attempts left)</p>`;
        guessInput.value = '';
        guessInput.focus();
    } else {
        resultArea.innerHTML = `
            <div class="fail">
                <h3>Out of attempts!</h3>
                <p><strong>The actual meaning was:</strong> ${currentPhrase.meaning}</p>
                <p><strong>Language:</strong> ${currentPhrase.language}</p>
                <p><strong>Original phrase:</strong> "${currentPhrase.original}"</p>
                <p><strong>Literal translation:</strong> "${currentPhrase.literal}"</p>
            </div>
        `;
        endRound();
    }
}

function showHint() {
    if (!currentPhrase.hintIndex) {
        currentPhrase.hintIndex = 0;
    }
    
    if (currentPhrase.hintIndex < currentPhrase.hints.length) {
        const hint = currentPhrase.hints[currentPhrase.hintIndex];
        resultArea.innerHTML = `<p class="hint">💡 Hint ${currentPhrase.hintIndex + 1}: ${hint}</p>`;
        currentPhrase.hintIndex++;
    } else {
        resultArea.innerHTML = `<p class="hint">💡 No more hints available!</p>`;
    }
}

function endRound() {
    inputArea.style.display = 'none';
    startBtn.style.display = 'block';
    startBtn.textContent = 'Play Again';
}