let questionCount = 0;
let numCorrect = 0;
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
    d:'1 finger'
},
    {q:"<img src='Q2.jfif' alt='several chickens'></img>",
    a:'4 chickens', 
    b:'3 chickens', 
    c:'5 chickens', 
    d:'2 chickens'
},
    {q:"<img src='too-many-apples-to-count.jfif' alt='too many apples to count'></img>",
    a:'5 apples', 
    b:'12 apples', 
    c:'x apples', 
    d:'13 apples'
},
    {q:"<img src='swimming-ducks.jfif' alt='several ducks swimming'></img>",
    a:'5 ducks', 
    b:'7 ducks', 
    c:'4 ducks', 
    d:'3 ducks'
}
];

function startQuiz6U() {
  $('#age-form').on('click', '#U6-selected', (event) => {
      event.preventDefault();   
      $('#age-form').addClass('hidden');
      $('#logo').addClass('hidden');
      $('.js-question-stem').removeClass('hidden');
      if (questionCount === 0) {
          console.log(`renderQuestionPage ran twice`);
      renderQuestionPage();
}})}

function currentQuestionTracker(){
    questionCount++;
    return renderQuestionPage(questionCount);
}

function findUserInput() {
    $('#question-box').on('click', '.answer-choice', (event) =>{
        event.stopPropagation();
        return currentQuestionTracker();
        })
    }

function renderQuestionPage() {
    console.log('`renderQuestionPage` ran');
    $('#question-box').html(`${questions6U[questionCount].q}<br>
    <button id='a'  value='a' class='answer-choice'>
       <label>
            <span>${questions6U[questionCount].a}</span>
        </label>
    </button>
    <button value='b' class='answer-choice'>
        <label>
            <span>${questions6U[questionCount].b}</span>
        </label>
    </button>
    <button value='c' class='answer-choice'>
        <label>
            <span>${questions6U[questionCount].c}</span>
        </label>
    </button>
    <button value='d' class='answer-choice'>
        <label>
            <span>${questions6U[questionCount].d}</span>
        </label>
    </button>

      <!--  <div id='question-number-container'>
            </p>
            |██ | ██ | ██ | ██ | ██| 5/5
            </p> 
        </div>
        
        <div id='number-correct-container'>
            <p>
            |██ | ██ | ██ ___ | ___ |   3/5
            </p>
        </div>-->`);
       
       return findUserInput(questions6U);
}

function quizAppHandler(){
    return startQuiz6U();
}

$(quizAppHandler)

/*        <div id='question-number-container'>
            </p>
            |___ | ___ | ___ | ___ | ___|0/5
            </p> 
        </div>
    
        <div id='number-correct-container'>
            <p>
            |___ | ___ | ___ | ___ | ___|0/5
            </p>
        </div>*/ 