var startBtn = document.getElementById("start");
var titleEl = document.getElementById("title");
var scoreBtn = document.getElementById("highScore");
var descriptionEl = document.getElementById("description");
var answerListItems = document.getElementsByClassName("answer-list-item");
var feedbackEl = document.getElementById("feedback");
var scoreEl = document.getElementById("score");
var submitBtn = document.getElementById("submit_button");
var openingSectionEl = document.getElementById("opening_section");
var quizlistSectionEl = document.getElementById("quizlist_section");
var submitSectionEl = document.getElementById("submit_section");
var scoreSectionEl = document.getElementById("score_section");
var buttonSectionEl = document.getElementById("button_section");
var gobackBtn = document.getElementById("goback_button");
var clearBtn = document.getElementById("clear_button");
var first = true;
var validInput = true;

var quizQuestions = [
  {
    "question": "Will I pass this class ? ",
    "answers": ["String", "false", "true", "Numbers"],
    "correctAnswer": "true"
  },
  {
    "question": "Will the Giant's win the World Series in 2021 ? ",
    "answers": ["quotes", "curly brackets", "true", "squre brackets"],
    "correctAnswer": "true"
  },
  {
    "question": "Was This Class Helpfull ? ",
    "answers": ["Javascript", "terminal/bash", "for loops", "true"],
    "correctAnswer": "true"
  },
  {
    "question": "Will this class git me a carrer job ? ",
    "answers": ["numbers and strings", "other arrays", "booleans", "true"],
    "correctAnswer": "true"
  },
  
];

// Time Countdown
var timerEl = document.getElementById("countdown");
var timerSecondSpan = document.getElementById("timer_second");
var timeInterval;
var timeLeft = 0;
var currentQuestionIndex = 0;

function countdown() {
  timeLeft = 99;
  timeInterval = setInterval(function() {
    timerSecondSpan.textContent = timeLeft;
    timeLeft--;
    if (timeLeft < 0 || currentQuestionIndex == quizQuestions.length) {
      gameOver();
    } 
  }, 1000);
};

// Game Over
var score = 0;
function gameOver() {
  clearInterval(timeInterval);
  var score = timeLeft;
  if (score < 0) {
    score = 0
  };
  quizlistSectionEl.classList.add("display-none");
  submitSectionEl.classList.remove("display-none");
  feedbackEl.classList.add("display-none");
  titleEl.textContent = "Game Over!";
  scoreEl.textContent = score;
}
 
// Question Section
var loadQuestions = function(questionIndex) {
  currentQuestionIndex = questionIndex;
  var questionJson = quizQuestions[currentQuestionIndex];
  var answers = questionJson["answers"];
  var question = questionJson["question"];
  titleEl.textContent = question;
  quizlistSectionEl.classList.remove("display-none");

  for (var i = 0 ; i < answerListItems.length; i++) {
    answerListItems[i].textContent = answers[i];
  }
};

// Question Loading loop
var setEventListeners = function() {
  currentQuestionIndex = 0;
  for (var i = 0 ; i < answerListItems.length; i++) {
    // add eventlistner
    answerListItems[i].addEventListener("click", function(event) {
      var currentListItem = event.currentTarget;
      var answersText = currentListItem.textContent;
      var questionJson = quizQuestions[currentQuestionIndex];
      if (answersText == questionJson["correctAnswer"]) {
        feedbackEl.textContent = "Correct~!";
        feedbackEl.style.color = "Green";
        feedbackEl.style.fontSize = "250%";

      } else {
        timeLeft -= 10;
        if (timeLeft < 0){
          timeLeft = 0;
        }
        feedbackEl.textContent = "Wrong!!!!";
        feedbackEl.style.color = "Red";
        feedbackEl.style.fontSize = "250%";
      }
      timerSecondSpan.textContent = timeLeft ;
      feedbackEl.setAttribute("class", "feedback");
      ++currentQuestionIndex;
      if (currentQuestionIndex < quizQuestions.length) {
        loadQuestions(currentQuestionIndex);
      } else {
        gameOver();
      }
    });
  }
}

// save scores
function saveScore() {
  var initial = document.getElementById("initial").value;
  if(initial !== "") {
    var finalScore = timeLeft.toString();
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var newScore = {
      scoreKey: finalScore,
      name: initial
    };
    
    highscores.push(newScore);
    highscores.sort(function(a, b) {
      return b.scoreKey - a.scoreKey;
    });
    localStorage.setItem("highscores", JSON.stringify(highscores));

    updateScoreList();
  } else {
    validInput = false;
    alert ("Please Enter Your Initials!");
  }
  
};

function updateScoreList() {
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var olEl = document.getElementById("score_list");
  olEl.innerHTML = ""

  // Updates score list with scores
  highscores.forEach(function(newScore) {
    var liEl = document.createElement("li");
    liEl.textContent = newScore.name + " - " + newScore.scoreKey;
    olEl.appendChild(liEl);
  });
}

function goBack () {
  location.reload();
};


// END OF DECLARATION


updateScoreList();

// Start button
startBtn.addEventListener("click", function(event) {
  event.preventDefault();

  countdown();

  scoreBtn.classList.add("display-none");
  openingSectionEl.classList.add("display-none"); 
  if (first) {
    setEventListeners();
  }
  loadQuestions(0);
  first = false;
});

gobackBtn.onclick = goBack;

// Submit button
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  validInput = true;
  saveScore();
  if (validInput) {
    scoreSectionEl.classList.remove("display-none");
    submitSectionEl.classList.add("display-none");
    titleEl.textContent = "High scores!";
    feedbackEl.classList.add("display-none");
    scoreBtn.classList.add("display-none");
    timerEl.classList.add("display-none");
    buttonSectionEl.classList.remove("display-none");
  }
});

// clear button
clearBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var olEl = document.getElementById("score_list")
  olEl.classList.add("display-none");
  localStorage.clear();
});

// view Highscore button
scoreBtn.addEventListener("click", function(event) {
  event.preventDefault();

  buttonSectionEl.classList.remove("display-none");
  openingSectionEl.classList.add("display-none")
  submitSectionEl.classList.add("display-none");
  titleEl.textContent = "High scores!";
  feedbackEl.classList.add("display-none");
  scoreBtn.classList.add("display-none");
  timerEl.classList.add("display-none");
  scoreSectionEl.classList.remove("display-none");
}); 
