let quizData = [
    {
        question: "What is the smallest planet in our solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Earth",
        d: "Mars",
        correctAnswer: "a"
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [ "Mount Kailash","Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        a: "Mount Kailash",
        b: "Mount Kilimanjaro",
        c: "Mount Everest",
        d: "Mount Fuji",
        correctAnswer: "c"
    },
    {
        question: "What temperature centigrade does water boil at?",
        a: 120,
        b: 100,
        c: 75,
        d: 155,
        correctAnswer: "b"
    }
]
const quiz = document.getElementById("quiz")
const answerEl = document.querySelectorAll(".answer")
const questionEL = document.getElementById("question")
const aText = document.getElementById("a-text") 
const bText = document.getElementById("b-text") 
const cText = document.getElementById("c-text") 
const dText = document.getElementById("d-text") 
const submitBtn = document.getElementById("submit-btn")

let loadingPart1 = document.querySelector(".loading-part1")
let loadingPart2 = document.querySelector(".loading-part2")
let loadingPart3 = document.querySelector(".loading-part3")
let loading = [loadingPart1, loadingPart2, loadingPart3]
let count = document.querySelector("#count")

let currentQuiz = 0
let score = 0
let countIndex = 0
let index = 0

loadQuiz()

function loadQuiz() {
    countIndex++

    deSelectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEL.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d

    count.innerHTML = `Question ${countIndex} / ${quizData.length}`
    loading[index].style.opacity = "1"
    index++


}

submitBtn.addEventListener("click", () => {

    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correctAnswer) {
            score++
        }
    }
    
    currentQuiz++
    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {

        quiz.innerHTML = `
            <h2>You Answered ${score}/${quizData.length} questions</h2>

            <button onclick = "location.reload()">New Game</button>
        `
    }

}) 

function getSelected() {

    let answer = undefined

    answerEl.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer

}

function deSelectAnswer() {

    answerEl.forEach((answersEl) => {
        answersEl.checked = false
    });

}