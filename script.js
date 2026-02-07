// Async function to translate a phrase using LibreTranslate API
async function translatePhrase(phrase, sourceLanguage) {
    try {
        const url = 'https://libretranslate.com/translate';
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: phrase,
                source: sourceLanguage,
                target: 'en',
                format: 'text'
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Translation response:', data);
        
        // Check different possible property names
        const translatedText = data.translatedText || data.translated || data.translation;
        
        if (translatedText) {
            return { text: translatedText, failed: false };
        } else {
            return { text: phrase, failed: true };
        }
    } catch (error) {
        console.error('Translation error:', error);
        // Return the original phrase if translation fails
        return { text: phrase, failed: true };
    }
}

// Sample phrases with literal translations
const phrases = [
    {
        literal: "To have tomatoes on the eyes",
        original: "Tomaten auf den Augen haben",
        meaning: "To be oblivious or not see something obvious",
        language: "German",
        languageCode: "de",
        keywords: ["oblivious", "blind", "obvious", "miss", "see", "unaware", "notice"],
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
        languageCode: "fr",
        keywords: ["busy", "occupied", "things to do", "priorities", "matters", "to do other things"],
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
        languageCode: "sv",
        keywords: ["easy", "privilege", "lucky", "effort", "unearned", "fortunate"],
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
        languageCode: "es",
        keywords: ["money", "broke", "poor", "cash", "afford", "penniless", "funds"],
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
        languageCode: "el",
        keywords: ["lazy", "idle", "inactive", "nothing", "unproductive", "sloth"],
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
        languageCode: "ro",
        keywords: ["deceive", "trick", "fool", "cheat", "lie", "dishonest", "manipulate"],
        hints: [
            "It's about dishonesty",
            "Someone is being fooled",
            "Think about manipulation",
            "Playing a trick on someone",
            "Making a fool of someone"
        ]
    },
    {
        literal: "I shit in the milk",
        original: "Me cago en la leche",
        meaning: "An expression of anger or frustration",
        language: "Spanish",
        languageCode: "es",
        keywords: ["anger", "angry", "frustration", "frustrated", "annoyed", "upset", "mad"],
        hints: [
            "It's an emotional outburst",
            "Something made you very upset",
            "Think about strong negative feelings",
            "You're expressing irritation",
            "Like saying 'damn it' or 'for crying out loud'"
        ]
    },
    {
        literal: "To have a tomcat",
        original: "Avoir un chat dans la gorge",
        meaning: "To have a frog in your throat (hoarse voice)",
        language: "French",
        languageCode: "fr",
        keywords: ["hoarse", "throat", "voice", "raspy", "scratchy", "sick"],
        hints: [
            "It's about how you sound",
            "Your voice isn't normal",
            "Think about being sick",
            "Something's wrong with your throat",
            "You can't speak clearly"
        ]
    },
    {
        literal: "To give someone pumpkins",
        original: "Dar calabazas",
        meaning: "To reject someone romantically",
        language: "Spanish",
        languageCode: "es",
        keywords: ["reject", "rejection", "dump", "break up", "refuse", "turn down"],
        hints: [
            "It's about relationships",
            "Someone doesn't want to date you",
            "Think about romantic rejection",
            "Getting turned down",
            "Breaking up with someone"
        ]
    },
    {
        literal: "It's raining pipe stems",
        original: "Het regent pijpenstelen",
        meaning: "It's raining very heavily",
        language: "Dutch",
        languageCode: "nl",
        keywords: ["rain", "raining", "heavy", "pouring", "storm", "downpour"],
        hints: [
            "It's about weather",
            "Water is falling from the sky",
            "Think about a storm",
            "Very intense precipitation",
            "Like 'raining cats and dogs'"
        ]
    },
    {
        literal: "To hang noodles on someone's ears",
        original: "Вешать лапшу на уши",
        meaning: "To lie or deceive someone",
        language: "Russian",
        languageCode: "ru",
        keywords: ["lie", "lying", "deceive", "trick", "mislead", "fool", "dishonest"],
        hints: [
            "It's about telling untruths",
            "Someone is being dishonest",
            "Think about deception",
            "Not telling the truth",
            "Making someone believe something false"
        ]
    },
    {
        literal: "To give water to the goose",
        original: "A da apă la gâște",
        meaning: "To do something pointless or useless",
        language: "Romanian",
        languageCode: "ro",
        keywords: ["pointless", "useless", "waste", "meaningless", "futile", "unnecessary"],
        hints: [
            "It's about wasted effort",
            "What you're doing has no purpose",
            "Think about something that doesn't matter",
            "A useless activity",
            "Like spinning your wheels"
        ]
    },
    {
        literal: "To be with the tongue out",
        original: "A fi cu limba scoasă",
        meaning: "To be exhausted or out of breath",
        language: "Romanian",
        languageCode: "ro",
        keywords: ["exhausted", "tired", "worn out", "breathless", "drained", "fatigued"],
        hints: [
            "It's about physical state",
            "You've worked too hard",
            "Think about running out of energy",
            "Completely wiped out",
            "Can barely catch your breath"
        ]
    },
    {
        literal: "To give someone pumpkin",
        original: "A da cuiva dovleac",
        meaning: "To fail someone or give a bad grade",
        language: "Romanian",
        languageCode: "ro",
        keywords: ["fail", "failing", "flunk", "bad grade", "unsuccessful", "reject"],
        hints: [
            "It's about school or exams",
            "Someone didn't pass",
            "Think about academic failure",
            "Getting a bad mark",
            "Not meeting the standard"
        ]
    },
    {
        literal: "To not have hair on the tongue",
        original: "Non avere peli sulla lingua",
        meaning: "To speak bluntly or frankly",
        language: "Italian",
        languageCode: "it",
        keywords: ["blunt", "frank", "honest", "direct", "straightforward", "candid"],
        hints: [
            "It's about how you communicate",
            "You say what you think",
            "Think about being honest",
            "Not sugarcoating things",
            "Speaking your mind directly"
        ]
    },
    {
        literal: "To throw the house out the window",
        original: "Tirar a casa pela janela",
        meaning: "To spend money extravagantly",
        language: "Portuguese",
        languageCode: "pt",
        keywords: ["spend", "spending", "extravagant", "splurge", "waste", "expensive"],
        hints: [
            "It's about money",
            "You're not being frugal",
            "Think about spending a lot",
            "Being wasteful with cash",
            "Living lavishly"
        ]
    },
    {
        literal: "To sell salad",
        original: "Vendre de la salade",
        meaning: "To tell lies or nonsense",
        language: "French",
        languageCode: "fr",
        keywords: ["lie", "lying", "nonsense", "bullshit", "deceive", "trick", "false"],
        hints: [
            "It's about honesty",
            "Someone isn't telling the truth",
            "Think about making things up",
            "Saying things that aren't true",
            "Talking rubbish"
        ]
    },
    {
        literal: "To have owls in the moss",
        original: "Ugler i mosen",
        meaning: "Something suspicious is going on",
        language: "Danish",
        languageCode: "da",
        keywords: ["suspicious", "fishy", "shady", "wrong", "dubious", "questionable"],
        hints: [
            "Something doesn't seem right",
            "You sense trouble",
            "Think about hidden problems",
            "Something sketchy is happening",
            "Not everything is as it seems"
        ]
    }
];

let currentPhrase = null;
let attemptsLeft = 5;
let score = 0;

// Get DOM elements
const startBtn = document.getElementById('startBtn');
const phraseDisplay = document.getElementById('phraseDisplay');
const inputArea = document.getElementById('inputArea');
const guessInput = document.getElementById('guessInput');
const languageGuess = document.getElementById('languageGuess');
const submitBtn = document.getElementById('submitBtn');
const hintBtn = document.getElementById('hintBtn');
const resultArea = document.getElementById('resultArea');
const scoreValue = document.getElementById('scoreValue');
const restartBtn = document.getElementById('restartBtn');

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

// Restart button click handler
restartBtn.addEventListener('click', function() {
    restartGame();
});

function restartGame() {
    // Reset score
    score = 0;
    scoreValue.textContent = score;
    
    // Add animation to score
    scoreValue.classList.add('score-update');
    setTimeout(() => {
        scoreValue.classList.remove('score-update');
    }, 400);
    
    // Reset the game state
    phraseDisplay.style.display = 'none';
    inputArea.style.display = 'none';
    resultArea.innerHTML = '';
    startBtn.style.display = 'block';
    startBtn.textContent = 'Start Game';
    guessInput.value = '';
    currentPhrase = null;
    attemptsLeft = 5;
}

async function startGame() {
    // Pick a random phrase
    currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    attemptsLeft = 5;
    currentPhrase.hintIndex = 0;
    
    // Show loading message
    phraseDisplay.style.display = 'flex';
    phraseDisplay.innerHTML = `
        <p class="phrase-text">Translating phrase...</p>
    `;
    
    // Hide start button
    startBtn.style.display = 'none';
    
    // Get translation from API
    const translationResult = await translatePhrase(currentPhrase.original, currentPhrase.languageCode);
    let translatedText = translationResult.text;
    const apiFailed = translationResult.failed;
    
    // If translation returns the original phrase unchanged or is empty, use the hardcoded literal
    if (translatedText === currentPhrase.original || !translatedText || translatedText === 'undefined') {
        translatedText = currentPhrase.literal;
    }
    
    // Build fallback message if API failed
    const fallbackMessage = apiFailed ? '<p class="fallback-notice">⚠️ Live translation unavailable — using fallback translation.</p>' : '';
    
    // Update the display with translated text
    phraseDisplay.innerHTML = `
        <h2>Literal Translation:</h2>
        <p class="phrase-text">"${translatedText}"</p>
        ${fallbackMessage}
        <p class="attempts">Attempts left: ${attemptsLeft}</p>
    `;
    
    // Show input area
    inputArea.style.display = 'block';
    resultArea.innerHTML = '';
    guessInput.value = '';
    languageGuess.value = '';
    guessInput.focus();
}

function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const languageGuessValue = languageGuess.value.trim().toLowerCase();
    const actualMeaning = currentPhrase.meaning.toLowerCase();
    
    if (guess === '') {
        resultArea.innerHTML = '<p class="error">Please enter a guess!</p>';
        return;
    }
    
    attemptsLeft--;
    
    // Check if guess contains any keyword from the current phrase
    const isCorrect = currentPhrase.keywords.some(keyword => guess.includes(keyword.toLowerCase()));
    
    // Check if language guess is correct
    const languageCorrect = languageGuessValue !== '' && languageGuessValue === currentPhrase.language.toLowerCase();
    
    if (isCorrect) {
        // Calculate points
        let pointsEarned = 1;
        let bonusMessage = '';
        
        if (languageCorrect) {
            pointsEarned += 1;
            bonusMessage = '<p class="bonus">🌟 Language Bonus: +1 Point!</p>';
        } else if (languageGuessValue !== '') {
            bonusMessage = `<p class="no-bonus">Language guess was incorrect (${languageGuessValue})</p>`;
        }
        
        // Increment score
        score += pointsEarned;
        scoreValue.textContent = score;
        
        // Add animation
        scoreValue.classList.add('score-update');
        setTimeout(() => {
            scoreValue.classList.remove('score-update');
        }, 400);
        
        resultArea.innerHTML = `
            <div class="success">
                <h3>🎉 Correct! +${pointsEarned} Point${pointsEarned > 1 ? 's' : ''}</h3>
                ${bonusMessage}
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
        languageGuess.value = '';
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