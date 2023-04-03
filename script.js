let quizData = [
    {
        question: "What is the smallest planet in our solar system?",
        answers: ["Mercury", "Venus", "Earth", "Mars"],
        correctAnswer: "Mercury"
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [ "Mount Kailash ","Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "What temperature centigrade does water boil at?",
        answers: [120, 100, 75, 155],
        correctAnswer: 100
    }
]
const questionEL = document.getElementById("question")
const aText = document.getElementById("a-text") 
const bText = document.getElementById("b-text") 
const cText = document.getElementById("c-text") 
const dText = document.getElementById("d-text") 
const submitBtn = document.getElementById("submit-btn")
let currentQuiz = 0
let index = 0

loadQuiz()

function loadQuiz() {
    let currentQuizData = quizData[currentQuiz]
    questionEL.innerText = currentQuizData.question
    aText.innerText = currentQuizData.answers[0]
    bText.innerText = currentQuizData.answers[1]
    cText.innerText = currentQuizData.answers[2]
    dText.innerText = currentQuizData.answers[3]
}

submitBtn.addEventListener("click", () => {
    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        // show resulet
        alert("Well Done")
    }
    loadQuiz()
}) 

function getSelected() {
    const answersEl = document.querySelectorAll(".answer")
}