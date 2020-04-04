let questionCount = 0;
let numCorrect = 0;

const questions6 = [
    {q:'3 + 4 = x',
    a:'x = 7',
    b:'x = 9',
    c:'x = 6',
    d:'x = 8',
    s:'a'
},
    {q:'5 + 6 = x',
    a:'x = 12',
    b:'x = 14',
    c:'x = 11',
    d:'x = 13',
    s:'c'
},
    {q:'7 + 8 = x',
    a:'x = 14',
    b:'x = 11',
    c:'x = 16',
    d:'x = 15',
    s:'d'
},
    {q:'9 + 4 = x',
    a:'x = 13',
    b:'x = 11 ',
    c:'x = 12 ',
    d:'x = 14',
    s:'a'
},
    {q:'6 + 11 = x',
    a:'x = 14',
    b:'x = 15',
    c:'x = 17',
    d:'x = 18',
    s:'c'
}
]

const questions6U = [
    {q:"<img src='colorful-carrots.jfif' alt='a bunch of carrots' width='350px'></img>",
    a:'5 carrots', 
    b:'7 carrots', 
    c:'8 carrots', 
    d:'13 carrots',
    s:'b'
},
    {q:"<img src='fingers-held-up.jfif' alt='fingers showing peace'></img>",
    a:'5 fingers', 
    b:'2 fingers', 
    c:'3 fingers', 
    d:'1 finger',
    s:'b'
},
    {q:"<img src='Q2.jfif' alt='several chickens'></img>",
    a:'4 chickens', 
    b:'3 chickens', 
    c:'5 chickens', 
    d:'2 chickens',
    s:'a'
},
    {q:"<img src='too-many-apples-to-count.jfif' alt='too many apples to count'></img>",
    a:'5 apples', 
    b:'12 apples', 
    c:'x apples', 
    d:'13 apples',
    s:'c'
},
    {q:"<img src='swimming-ducks.jfif' alt='several ducks swimming'></img>",
    a:'5 ducks', 
    b:'7 ducks', 
    c:'4 ducks', 
    d:'3 ducks',
    s:'c'
}
];

let under6 = true;

function startQuiz6U() {
  $('#age-form').on('click', '#U6-selected', (event) => {
    event.preventDefault();   
    $('#age-form').addClass('hidden');
    $('#logo').addClass('hidden');
    $('.js-question-stem').removeClass('hidden');
    renderQuestionPage();
})}

function currentQuestionTracker(){
  questionCount++;
}

function numCorrectTracker() {
  numCorrect++;
}

//This is the quiz for under 6.

function findUserInput() {
  $('#question-box').on('click', '.js-answer-choice', (event) =>{
    let chosenResponse = event.currentTarget.value;
    let correctResponse = questions6U[questionCount].s;
    if (chosenResponse === correctResponse) {
      numCorrectTracker();
      questionCorrectResponse();
    }
    else if (questionCount === 3){
      explainVariable();
    }
    else {
      questionIncorrectResponse();
    }
    currentQuestionTracker();
  });
}

function questionCorrectResponse() {
    $(`#question-box`).html(`<div class='response-buttons'><button id="correct-response-button">
      Good!</button>
      <p class='click-sign'>click to continue ☝️</p>
      </div>
      `);
    $('.js-question-stem').toggleClass('hidden');
}

function explainVariable() {
    $(`#question-box`).html(`<div class='response-buttons'><button id="incorrect-response-button">
    The correct response was 
    ${questions6U[questionCount][questions6U[questionCount].s]}
    </button>
    <p class='click-sign'>click to continue ☝️</p><br>
    <p><span>Talk to your child about what a variable is.</span><br>
    A number that you don't know is called a variable.<br>
    A variable number is represented by a symbol, such as x.
    </div>`);
  $('.js-question-stem').toggleClass('hidden');
}

function questionIncorrectResponse() {
    $(`#question-box`).html(`<div class='response-buttons'><button id="incorrect-response-button">
      The correct response was 
      ${questions6U[questionCount][questions6U[questionCount].s]}
      </button>
      <p class='click-sign'>click to continue ☝️</p>
      </div>
      `);
    $('.js-question-stem').toggleClass('hidden');
}

function continueAfterQuestion() {
    $('#question-box').on('click', '#correct-response-button, #incorrect-response-button', (e) => {
        $('#correct-response-button, #incorrect-response-button').remove();
        $('.js-question-stem').toggleClass('hidden');
        renderOrFinishPage();
    }); 
}

function renderOrFinishPage() {
    if (questionCount === 5) {
        $('#question-box').html(`<div id='question-number-container'>
                </p>
                |██${' ██'.repeat(questionCount-1)} | ${questionCount}/5
                </p> 
            </div>
            
            <div id='number-correct-container'>
                <p>
                |${'██ '.repeat(numCorrect)}|  ${numCorrect}/5
                </p>
            </div>
            <form id='js-retake-or-finish'>
            <button id='js-retake'>Retake!
            </button>
            <button id='js-finish'>Finish!
            </button>
            </form>`);
    }
        else renderQuestionPage();
}

function retakeQuiz() {
    $('#question-box').on('click', '#js-retake', e =>{
        numCorrect = 0;
        questionCount = 0;  
        $('#age-form').addClass('hidden');
        $('#logo').addClass('hidden');
        $('.js-question-stem').removeClass('hidden');
        renderQuestionPage();
    })
}

function renderQuestionPage() {
    if (under6 === true) {
    $('#question-box').html(`${questions6U[questionCount].q}<br>
    <div id='js-answer-choice-container'>
    <button value='a' id='a' class='js-answer-choice'>
       <label>
            <span>${questions6U[questionCount].a}</span>
        </label>
    </button>
    <button value='b' id='b' class='js-answer-choice'>
        <label>
            <span>${questions6U[questionCount].b}</span>
        </label>
    </button>
    <button value='c' id='c' class='js-answer-choice'>
        <label>
            <span>${questions6U[questionCount].c}</span>
        </label>
    </button>
    <button value='d' id='d' class='js-answer-choice'>
        <label>
            <span>${questions6U[questionCount].d}</span>
        </label>
    </button>
    </div>
<div id='js-stats-container'>
    <div id='question-number-container'>
            </p>
            Question #:<br>
            | ██${' ██'.repeat(questionCount)} | ${questionCount+1}/5
            </p> 
        </div>
        
        <div id='number-correct-container'>
            <p>
            Number Correct:<br>
            | ${'██ '.repeat(numCorrect)}|  ${numCorrect}/5
            </p>
        </div>
        </div>`);
    }

    else {
        $('#question-box').html(`<p id='js-question-6'><br>Solve for x:<br>${questions6[questionCount].q}</p><br>
        <button value='a' id='a' class='js-answer-choice-6'>
           <label>
                <span>${questions6[questionCount].a}</span>
            </label>
        </button>
        <button value='b' id='b' class='js-answer-choice-6'>
            <label>
                <span>${questions6[questionCount].b}</span>
            </label>
        </button>
        <button value='c' id='c' class='js-answer-choice-6'>
            <label>
                <span>${questions6[questionCount].c}</span>
            </label>
        </button>
        <button value='d' id='d' class='js-answer-choice-6'>
            <label>
                <span>${questions6[questionCount].d}</span>
            </label>
        </button>
    <div id='js-stats-container-6'>
        <div id='question-number-container-6'>
                </p>
                Question #:<br>
                | ██${' ██'.repeat(questionCount)} | ${questionCount+1}/5
                </p> 
            </div>
            
            <div id='number-correct-container-6'>
                <p>
                Number Correct:<br>
                | ${'██ '.repeat(numCorrect)}|  ${numCorrect}/5
                </p>
            </div>
            </div>`);
    }
    }

//This is the quiz for 6+

function startQuiz6() {
    $('#age-form').on('click', '#selected-6', (event) => {
      event.preventDefault();
      under6 = false
      $('#age-form').addClass('hidden');
      $('#logo').addClass('hidden');
      renderQuestionPage();
  })}

function findUserInput6() {
    $('#question-box').on('click', '.js-answer-choice-6', (event) =>{
      let chosenResponse = event.currentTarget.value;
      let correctResponse = questions6[questionCount].s;
      if (chosenResponse === correctResponse) {
        numCorrectTracker();
        questionCorrectResponse6();
      }
      
      else {
        questionIncorrectResponse6();
      }
      currentQuestionTracker();
    });
  }
  
  function questionCorrectResponse6() {
      $(`#question-box`).html(`<br><div class='response-buttons'>
      <button id="correct-response-button-6">
        Good!<br>
        </button>
        <p class='click-sign'>click ☝️</p>
        </div>
        `);
  }
 
  function questionIncorrectResponse6() {
      $(`#question-box`).html(`<br><div class='response-buttons'>
      <button id="incorrect-response-button-6">
        The correct response was 
        ${questions6[questionCount][questions6[questionCount].s]}
        </button>
        <p class='click-sign'>click ☝️</p>
        </div>
        `);
  }
  
  function continueAfterQuestion6() {
      $('#question-box').on('click', '#correct-response-button-6, #incorrect-response-button-6', (e) => {
          $('#correct-response-button-6, #incorrect-response-button-6').remove();
          renderOrFinishPage6();
      }); 
  }
  
  function renderOrFinishPage6() {
      if (questionCount === 5) {
          $('#question-box').html(`<div id='question-number-container'>
                  </p>
                  |██${' ██'.repeat(questionCount-1)} | ${questionCount}/5
                  </p> 
              </div>
              
              <div id='number-correct-container'>
                  <p>
                  |${'██ '.repeat(numCorrect)}|  ${numCorrect}/5
                  </p>
              </div>
              <form id='js-retake-6-or-finish'>
              <button id='js-retake-6'>Retake!
              </button>
              <button id='js-finish'>Finish!
              </button>
              </form>`);
      }
          else renderQuestionPage();
  }
  
  function retakeQuiz6() {
      $('#question-box').on('click', '#js-retake-6', e =>{
          numCorrect = 0;
          questionCount = 0;  
          $('#age-form').addClass('hidden');
          $('#logo').addClass('hidden');
          renderQuestionPage6();
      })
  }

function quizAppHandler(){
    startQuiz6U();
    startQuiz6();
    findUserInput();
    continueAfterQuestion();
    retakeQuiz();
    findUserInput6();
    continueAfterQuestion6();
    retakeQuiz6();
}

$(quizAppHandler)

     