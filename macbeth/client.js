
let questions = [];

console.log("Attempt #14");

let score = 0;
let loaded = false;

let currentQuestion = 0;

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
        
        console.log("Processed Questions:", questions);
        // You can use the questions array as needed in your application
    } catch (error) {
        console.error("Error fetching or processing the file:", error);
    }
}


const quesbox = document.getElementById("quesbox");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");

function loadQuestion(){
    if (currentQuestion < 0 || currentQuestion >= questions.length) {
        console.log("Absolutely Not!");
        return "Invalid question number";
    }
    const q = questions[currentQuestion];
    
    quesbox.textContent = q.question;
    ans1.textContent = q.answers[0].substring(3);
    ans2.textContent = q.answers[1].substring(3);
    ans3.textContent = q.answers[2].substring(3);
    ans4.textContent = q.answers[3].substring(3);
    loaded = true;
}

function answer1click() {
    if(!loaded) { alert("Failed"); return; }
    if(questions[currentQuestion].answers[0].substring(0, 3) == "-> ") {
        alert("correct");
    } else {
        alert("wrong");
        alert(questions[currentQuestion].answers[0].substring(0, 3));
    }
    currentQuestion++;
    loadQuestion();
}
function answer2click() {
    if(!loaded) { alert("Failed"); return; }
    if(questions[currentQuestion].answers[0].substring(0, 3) == "-> ") {
        alert("correct");
    } else {
        alert("wrong");
        alert(questions[currentQuestion].answers[1].substring(0, 3));
    }
    currentQuestion++;
    loadQuestion();
}
function answer3click() {
    if(!loaded) { alert("Failed"); return; }
    if(questions[currentQuestion].answers[0].substring(0, 3) == "-> ") {
        alert("correct");
    } else {
        alert("wrong");
        alert(questions[currentQuestion].answers[2].substring(0, 3));
    }
    currentQuestion++;
    loadQuestion();
}

function answer4click() {
    if(!loaded) { alert("Failed"); return; }
    if(questions[currentQuestion].answers[0].substring(0, 3) == "-> ") {
        alert("correct");
    } else {
        alert("wrong");
        alert(questions[currentQuestion].answers[3].substring(0, 3));
    }
    currentQuestion++;
    loadQuestion();
}


function runInitEngine(){
    score = 0;

}


const fileUrl = 'questions.txt';
fetchAndProcessQuestions(fileUrl).then(() => {
    // Fetch the text file located in the same directory
    runInitEngine();

});