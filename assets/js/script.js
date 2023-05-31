// button: View Highscores
// text: Time

// Multiple Choice Quiz
// array of pre-loaded questions
// createElement: ol to display quiz question text, created in the body
// appendChild: append li to ol for the multiple choice answers
// textContent: fill both ol and li with text content and make sure they're related

//after the question has been answered, remove current question then populate a new question

// list of all questions, choices, and answers
var questions = [
    {
      question: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      question: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      question: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      question:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      question:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];

  //keep track of the player's score
  //we will need to store this on local storage?
var scoreboard = {
    name: 'John Smith',
    correct: -1,
    incorrect: -1
} 

var timeCount = 30; //30 second timer

function initializeQuestions() {
    var tempArr = [];
    for (var i = 0; i < questions.length; i++){
        tempArr.push(questions[i].question);
    }
    return tempArr;
}

var remainingQuestions = initializeQuestions();

  
//creates an ol element and its children li elements
function generateQuestion(num){
    var questionEl = document.createElement('h1');
    var section = document.getElementById('quiz');
    var questionText = questions[num].question; //this is where num goes

    questionEl.setAttribute('id', 'question')
    section.appendChild(questionEl);
    questionEl.textContent = questionText;
}

function generateAnswers(num){
    var choicesEl = []; //array of elements to be put onto the page
    var section = document.getElementById('question');
    var choicesText = questions[num].choices; //pulls the array of choices from the questions object and assigns it to the new choicesText variable
    var randomChoice = "";
    var maxIterations = choicesText.length;

    for(var i = 0; i < maxIterations; i++){
        choicesEl.push(document.createElement('button'));
        randomChoice = randomNumber(choicesText.length);
        choicesEl[i].textContent = choicesText[randomChoice];
        choicesText.splice(randomChoice, 1);
        section.appendChild(choicesEl[i]);
    }
}

function randomNumber(num){
    if(!(num < 0)){
        return Math.floor(Math.random() * num);
    } else { console.log('ERROR HERE?') }
}


//currently, this timer will decrement until it is out of time
//need to add true/false functionality connected to the answers the user provides by clicking on a button
function timer(){
    if(timeCount <= 0){
        clearInterval();
        //return answer = wrong
    } else {
        timeCount--;
        console.log(timeCount++);
    }
}

//FIRST the screen will be populated with the question and answers
//SECOND the timer will start immediately after first
//the timer function will be triggered with a start button press
function game(){
    //we want to make sure the number is the same for question and answer functions

    var randNum = -1;

    randNum = randomNumber(remainingQuestions.length);
    
    generateQuestion(randNum);
    generateAnswers(randNum);
    remainingQuestions.splice(randNum, 1);
}

// document.addEventListener('click', function(){
//     game();
// })