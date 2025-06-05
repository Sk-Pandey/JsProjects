let name = prompt("What is Your Name");
const questions = [
    {
        question: "If 1st January is Sunday, what day will be on 1st March (non-leap year)?",
        answers: [
            { option: "Wednesday", correct: true },  // ✅ fixed
            { option: "Thursday", correct: false },
            { option: "Tuesday", correct: false },
            { option: "Friday", correct: false }
        ]
    },
    {
        question: "How many odd days are there in 400 years?",
        answers: [
            { option: "0", correct: true },
            { option: "1", correct: false },
            { option: "2", correct: false },
            { option: "3", correct: false }
        ]
    },
    {
        question: "What day of the week was 15th August 1947?",
        answers: [
            { option: "Friday", correct: true },
            { option: "Thursday", correct: false },
            { option: "Saturday", correct: false },
            { option: "Sunday", correct: false }
        ]
    },
    {
        question: "Which year is a leap year?",
        answers: [
            { option: "1900", correct: false },
            { option: "2000", correct: true },
            { option: "2100", correct: false },
            { option: "2200", correct: false }
        ]
    },
    {
        question: "How many days are there in 5 weeks and 3 days?",
        answers: [
            { option: "38", correct: true },
            { option: "36", correct: false },
            { option: "35", correct: false },
            { option: "33", correct: false }
        ]
    },
    {
        question: "If today is Monday, what will be the day after 61 days?",
        answers: [
            { option: "Wednesday", correct: false },
            { option: "Saturday", correct: true },
            { option: "Friday", correct: false },
            { option: "Sunday", correct: false }
        ]
    },
    {
        question: "Which of the following months has exactly 30 days?",
        answers: [
            { option: "February", correct: false },
            { option: "April", correct: true },
            { option: "January", correct: false },
            { option: "March", correct: false }
        ]
    },
    {
        question: "If 10th October 2020 was a Saturday, what day was 3rd October 2020?",
        answers: [
            { option: "Friday", correct: false },
            { option: "Sunday", correct: false },
            { option: "Saturday", correct: true },  // ✅ fixed
            { option: "Monday", correct: false }
        ]
    },
    {
        question: "How many days are there in a leap year?",
        answers: [
            { option: "366", correct: true },
            { option: "365", correct: false },
            { option: "367", correct: false },
            { option: "364", correct: false }
        ]
    },
    {
        question: "If 1st January 2021 was Friday, what day was 1st January 2022?",
        answers: [
            { option: "Saturday", correct: true },
            { option: "Sunday", correct: false },
            { option: "Friday", correct: false },
            { option: "Thursday", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answers-btn");
const NextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score =0;
    NextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    // to show Question
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML= questionNo +". "+currentQuestion.question;

    // to show options
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.option;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    NextButton.classList.add("hidden");
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    NextButton.classList.remove("hidden");
    NextButton.classList.add("block");
}

function showScore(){
    resetState();
    questionElement.innerHTML=`${name} Your Score is ${score} out Of ${questions.length}`
    NextButton.innerHTML="Play Agin";
    NextButton.classList.remove("hidden");
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
NextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();