
let questions = [];

console.log("Attempt #5");

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
                const question = lines[i].trim();
                const answer1 = lines[i + 1].trim();
                const answer2 = lines[i + 2].trim();
                const answer3 = lines[i + 3].trim();
                const answer4 = lines[i + 4].trim();
                
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



function loadQuestion(numques){
    console.log("Processed Questions but like again after:", questions);
    if (numques < 0 || numques >= questions.length) {
        console.log("Absolutely Not!");
        return "Invalid question number";
    }
    const q = questions[number];
    console.log("HERE IS IT");
    console.log(q);

}

// Fetch the text file located in the same directory
const fileUrl = 'questions.txt';
fetchAndProcessQuestions(fileUrl);

loadQuestion(2);