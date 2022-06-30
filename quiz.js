let quizData = [
{     
  question: 'Javascript is an _______ language?',
          
       a :' Object-Oriented',
       b : 'Object-based',
       c :  'proccedurl',
       d : 'None of the above' ,  
         correct:'a'
     
},
     { question: 'Which of the following keywords is used to define a variable in Javascript?',
          
       a : 'var',
       b : 'Both A and B',
       c : 'let',
       d :  'none of the above',
         correct: "b"

},{
      question: ' Which of the following methods is used to access HTML elements using Javascript?',
          
       a :'getElementByID()',
       b : 'getElementsByIdClassName()',
       c :  'Both A and B',
       d : 'None of the above' ,  
         correct:'c'
},{
      question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
          
       a  : "Throws an error",
       b  :  "Ignores the statements", 
       c  :  "gives a warning",
       d  : 'None of the above' ,  
         correct:'b'
},{
      question: 'How can a datatype be declared to be a constant type?',
          
       a :' const',
       b  : 'var',
       c :  'let',
       d  : 'None of the above' ,  
         correct:'a'
}
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl= document.getElementById("question");

const A=  document.getElementById('text1');
const B =  document.getElementById('text2');
const C=  document.getElementById('text3');
const D =  document.getElementById('text4');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
 

loadQuiz();


function loadQuiz() {
deselectAnswers();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;
A.innerText = currentQuizData.a;
B.innerText = currentQuizData.b;
C.innerText = currentQuizData.c;
D.innerText = currentQuizData.d;

}
function getSelected() {
let answer = undefined;

 answerEls.forEach((answerEl) => {
if(answerEl.checked) {
 answer = answerEl.id;
}
});
return answer;
}
function deselectAnswers() {
answerEls.forEach((answerEl) => {
answerEl.checked = false;
});
}
 submit.addEventListener("click", () => {

const answer = getSelected();

if(answer) {
if(answer === quizData[currentQuiz].correct) {
score++;
}
currentQuiz++;
if(currentQuiz < quizData.length){
 loadQuiz();
}else {
quiz.innerHTML = `<h2>YOU answered correctly at ${score}/${quizData.length}questions.</h2>`;
}
}
});
