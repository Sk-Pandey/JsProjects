const questions = [
    {
        question:"Who is the Prime Minister Of India?",
        answers:[
            {option :"Arvind Keshriwal",correct:false},
            {option :"Raj Nath",correct:false},
            {option :"Narendra Modi",correct:true},
            {option :"Rahul Gandhi",correct:false}
        ]
    },
    {
        question:"what is value Of 8 x 9?",
        answers:[
            {option :"72",correct:true},
            {option :"52",correct:false},
            {option :"80",correct:false},
            {option :"78",correct:false}
        ]
    },
    {
        question:"what is value Of 290-20?",
        answers:[
            {option :"270",correct:true},
            {option :"280",correct:false},
            {option :"310",correct:false},
            {option :"260",correct:false}
        ]
    },
    {
        question:"Who is the CM of Bihar Of India?",
        answers:[
            {option :"Arvind Keshriwal",correct:false},
            {option :"Raj Nath",correct:false},
            {option :"Nitish yadav",correct:true},
            {option :"Rahul Gandhi",correct:false}
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
    questionElement.innerHTML=`Your Score is ${score} out Of ${questions.length}`
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