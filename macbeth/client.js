
let questions = [];

console.log("Attempt #29");

let score = 0;
let loaded = false;

let currentQuestion = 0;

let done = false;

async function fetchAndProcessQuestions(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        
        const lines = text.split('\n');
        
        for (let i = 0; i < lines.length; i += 5) {
            if (i + 4 < lines.length) { // Ensure there are at least 5 lines remaining
                const question = lines[i];
                const answer1 = lines[i + 1];
                const answer2 = lines[i + 2];
                const answer3 = lines[i + 3];
                const answer4 = lines[i + 4];
                
                questions.push({
                    question,
                    answers: [answer1, answer2, answer3, answer4]
                });
            }
        }
        
        // You can use the questions array as needed in your application
    } catch (error) {
        console.error("Error fetching or processing the file:", error);
    }
}

function onentersound(){
    
    var audio = new Audio('hover.mp3');
    audio.play();
}

const quesbox = document.getElementById("quesbox");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");

function endofgame(){
    done = true;
    
    quesbox.textContent = "Done! You got a " + score.toString() + " out of " + questions.length.toString() + ". That is a " + Math.floor(((score/questions.length)*100)).toString() + "%";
    
    ans1.style.display = "block";
    ans2.style.display = "none";
    ans3.style.display = "none";
    ans4.style.display = "none";

    ans1.textContent = "Restart";
    var audio = new Audio('done.mp3');
    audio.play();

}


function loadQuestion(){
    done = false;
    ans1.style.display = "block";
    ans2.style.display = "block";
    ans3.style.display = "block";
    ans4.style.display = "block";
    if (currentQuestion < 0) {
        alert("Error!");
        return "Invalid";
    }
    if (currentQuestion >= questions.length) {
        endofgame();
        return;
    }
    const q = questions[currentQuestion];
    
    quesbox.textContent = q.question;
    ans1.textContent = q.answers[0].substring(3);
    ans2.textContent = q.answers[1].substring(3);
    ans3.textContent = q.answers[2].substring(3);
    ans4.textContent = q.answers[3].substring(3);
    loaded = true;
}

function runInitEngine(){
    currentQuestion = 0;
    score = 0;
    loadQuestion(0);
}

function answer1click() {
    if(done) {
        runInitEngine();
        return;
    }
    var audio = new Audio('select.mp3');
    audio.play();
    if(!loaded) { runInitEngine(); return; }
    if(questions[currentQuestion].answers[0].substring(0, 3) == "-> ") {
        score++;
    } else {
    }
    currentQuestion++;
    loadQuestion();
}
function answer2click() {
    var audio = new Audio('select.mp3');
    audio.play();
    if(!loaded) { alert("Failed"); return; }
    if(questions[currentQuestion].answers[1].substring(0, 3) == "-> ") {
        score++;
    } else {
    }
    currentQuestion++;
    loadQuestion();
}
function answer3click() {
    var audio = new Audio('select.mp3');
    audio.play();
    if(!loaded) { alert("Failed"); return; }
    if(questions[currentQuestion].answers[2].substring(0, 3) == "-> ") {
        score++;
    } else {
    }
    currentQuestion++;
    loadQuestion();
}

function answer4click() {
    var audio = new Audio('select.mp3');
    audio.play();
    if(!loaded) { alert("Failed"); return; }
    if(questions[currentQuestion].answers[3].substring(0, 3) == "-> ") {
        score++;
    } else {
    }
    currentQuestion++;
    loadQuestion();
}


function RunStart(){
    quesbox.textContent = "Welcome to Macbeth quiz. Click the button labeled 'Start' to begin";
    ans1.style.display = "block";
    ans2.style.display = "none";
    ans3.style.display = "none";
    ans4.style.display = "none";

    ans1.textContent = "Start";
}

const fileUrl = 'questions.txt';
fetchAndProcessQuestions(fileUrl).then(() => {
    // Fetch the text file located in the same directory
    RunStart();

});