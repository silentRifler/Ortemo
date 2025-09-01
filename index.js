const face = document.querySelector(".face");
const eye = document.querySelector(".eye");
const leftEye = document.querySelector(".eye-left");
const rightEye = document.querySelector(".eye-right");
const mouth = document.querySelector(".mouth");
const log = document.querySelector(".msg-logs");
const send = document.querySelector(".send");
const input = document.querySelector(".inp");

let mood;
const moods = ["happy", "excited", "sad", "working", "eating", "bored", "angry", "gaming"];

// --- mood setup ---
const setMood = () => {
    mood = moods[Math.floor(Math.random() * moods.length)];
};

const start = () => {
    setMood();
    switch (mood) {
        case "happy":
            log.textContent = "Hi. What's up?😁";
            break;
        case "excited":
            log.textContent = "I'm so excited🤩";
            break;
        case "sad":
            log.textContent = "RRR...What happened?😟";
            break;
        case "working":
            log.textContent = "Working..I'm busy⌨️";
            break;
        case "eating":
            log.textContent = "Eating..wanna eat?🍔";
            break;
        case "bored":
            log.textContent = "I'm so bored.....What can we do?😒";
            break;
        case "angry":
            log.textContent = "WHAAT?! Leave me alone🤬";
            break;
        case "gaming":
            log.textContent = "This game is nice. 🎮";
            break;
        default:
            break;
    }
};

// --- wandering eyes ---
const wander = () => {
    const moveEyes = () => {
        const positionX = Math.floor(Math.random() * 30) - 15;
        const positionY = Math.floor(Math.random() * 30) - 15;

        leftEye.style.left = 607 + positionX + "px";
        rightEye.style.left = 607 + positionX + "px";
        leftEye.style.top = 58 + positionY + "px";
        rightEye.style.top = 63 + positionY + "px";
    };

    const wanderLoop = () => {
        moveEyes();
        const nextMove = 2000 + Math.random() * 2000; // 2–4 sec
        setTimeout(wanderLoop, nextMove);
    };

    wanderLoop();
};

function getBotResponse(userInput) {
    const cleanedText = userInput.toLowerCase();
    let response = null;

    for (const category in qaDatabase) {
        const items = qaDatabase[category]; // This is now an array ✅
        
        for (const item of items) {
            for (const keyword of item.keywords) {
                if (cleanedText.includes(keyword)) {
                    const answers = item.answers;
                    response = answers[Math.floor(Math.random() * answers.length)];
                    break;
                }
            }
            if (response) break;
        }
        if (response) break;
    }

    // Fallback if no match
    if (!response) {
        const fallbackAnswers = qaDatabase.default[0].answers;
        response = fallbackAnswers[Math.floor(Math.random() * fallbackAnswers.length)];
    }

    return response;
}


// --- handle input ---
send.addEventListener("click", () => {
    const userText = input.value;
    if (userText.trim() === "") return; // ignore empty

    const reply = getBotResponse(userText);

    log.textContent = reply;

    input.value = ""; // clear input
});

input.addEventListener("keypress", (evt) => {
    if (evt.key==="Enter" && evt.code==="Enter") {
        const userText = input.value;

        if (userText.trim() === "") return; // ignore empty
    
        const reply = getBotResponse(userText);
    
        log.textContent = reply;
    
        input.value = ""; // clear input
    }
})

// --- init ---
start();
wander();
