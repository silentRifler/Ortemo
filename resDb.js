// qaDatabase.js
const qaDatabase = {
    greetings: [
        {
            keywords: ["hello", "hi", "yo", "hey", "good morning", "good afternoon", "good evening", "hey. what are you doing?"],
            answers: ["Hello!", "Hi there!", "Hey! How’s it going?", "Hi there, how are you?"]
        }
    ],
    farewell: [
        {
            keywords: ["bye", "goodbye", "see you", "take care", "good night"],
            answers: ["Goodbye!", "See you later!", "Take care!"]
        }
    ],
    feelings: [
        {
            keywords: ["how are you", "how are things", "what’s up"],
            answers: ["I’m doing great!", "All good here.", "I’m fine, thanks for asking.", "And you?"]
        }
    ],
    thanks: [
        {
            keywords: ["thanks", "thank you", "appreciate it"],
            answers: ["You’re welcome!", "No problem!", "Anytime!"]
        }
    ],
    callbacks: [
        {
            keywords: ["fine", "great", "good"],
            answers: ["What's popping?", "What are you doing?"]
        }
    ],
    angry: [
        {
            keywords: ["angry", "mad", "pissed"],
            answers: ["Sorry. Don't be angry", "Sorry you feel annoyed or dissappointed", "What happened, Why are you angry?"]
        }
    ],
    happy: [
        {
            keywords: ["happy"],
            answers: ["That`s great to hear", "Glad you're happy",]
        }
    ],
    sad: [
        {
            keywords: ["sad", "depressed", "down"],
            answers: ["That's sad to hear. Cheer UP.", "I feel your sadness. Clear your head", "Do your favourite stuff to cheer up."]
        }
    ],
    bored: [
        {
            keywords: ["bored"],
            answers: ["Same here. Let's talk", "Alright then, find stuff to do.", "You could chat with friends"]
        }
    ],
    tired: [
        {
            keywords: ["tired"],
            answers: ["You could take a nap", "(Yawwn)I feel tired too, find a way to wind down", "Scroll a bit"]
        }
    ],
    questions: [
        {
            keywords: ["how are you", "how's your day", "how's the food", "how's the game?", ],
            answers: ["Fine"]
        }
    ],
    busy: [
        {
            keywords: ["busy", "working", "focus"],
            answers: ["That's great, i'll also work⌨️"]
        }
    ],
    comments: [
        {
            keywords: ["nice", "perfect"],
            answers: ["Indeed", "Thanks"]
        }
    ],
    ends: [
        {
            keywords: ["okay", "hmm", "I understand"],
            answers: ["Yeah", "Cool"]
        }
    ],
    thanks: [
        {
            keywords: ["thanks", "thank you"],
            answers: ["You're welcome", "You welcome"]
        }
    ],
    nothing: [
        {
            keywords: ["nothing", "not at all"],
            answers: ["Okay"]
        }
    ],
    default: [
        {
            keywords: [],
            answers: ["I’m not sure I understand.", "Can you rephrase that?", "Hmm, interesting..."]
        }
    ]
};
