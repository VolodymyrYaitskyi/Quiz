
async function init() {
    let response = await fetch("http://localhost:3000/questions");
    let quizzJson = await response.json();
    getRootQuestionQuizDOM(quizzJson[0].rootQuestion);
    insertUlLi(quizzJson[0].answers, '.calculator-item');
    InsertSubmitButton("nextButton", 'Далее');

    let butonnext = document.querySelector(".nextButton")
    butonnext.addEventListener("click", buttonNextClicked.bind(null, quizzJson, butonnext), { once: true });

}

function getRootQuestionQuizDOM(quizzJson) {
    insertBlock('div','.calculator-wrapper', 'calculator-item');
    insertBlock('div','.calculator-item', 'calculator-item-title', quizzJson);
}

function insertBlock(tagname, parentClassSelectorToInsert, newBlockClassName, textElement){
    let newElement = document.createElement(tagname);
    newElement.className = newBlockClassName;
    (document.querySelector(parentClassSelectorToInsert)).appendChild(newElement)
    if (textElement) {
        newElement.innerHTML = textElement;
    }
}

function insertUlLi(quizzJsonAnswers, parentClassSelectorToInsert){
    let newElementUl = document.createElement('ul');
    (document.querySelector(parentClassSelectorToInsert)).appendChild(newElementUl)
     for (let key in quizzJsonAnswers) {
         let newElementLi = document.createElement('li');
         newElementUl.appendChild(newElementLi);
         let newElementInput = document.createElement('input');
         newElementInput.value = key;
         newElementInput.name = quizzJsonAnswers[key].name;
         newElementInput.type = quizzJsonAnswers[key].type;
         //newElementInput.className = quizzJson[0].answers[key].type;
         newElementLi.appendChild(newElementInput);
         let newElementLabel = document.createElement('label');
         newElementLi.appendChild(newElementLabel);
         newElementLabel.innerHTML = quizzJsonAnswers[key].label;
     }
}

function InsertSubmitButton(newBlockClassName, textElement){
    insertBlock('div', ".calculator_buttons_container", newBlockClassName);
    insertBlock('button', `.${newBlockClassName}`, newBlockClassName,textElement);
}

function getNextQuestions(quizzJson, variant) {
    if (!variant) {
        return quizzJson[0];
    }
    return quizzJson[0].subQuestions[variant];
}

function buttonNextClicked(quizzJson, butonnext, event) {
    event.preventDefault();
    let answer = (document.querySelector("input[type='radio']:checked")).value;
    let label = document.querySelector('.calculator-item-title')
    label.innerHTML = quizzJson[0].answers[answer].label
    let nextQuestion = getNextQuestions(quizzJson, answer) // quizzJson[0].subQuestions[variant]
    document.querySelector('ul').remove();
    insertTemplate(nextQuestion)
}

function insertTemplate(nextQuestion) {
    for (key in nextQuestion.questions) {
        insertBlock('div','.calculator-wrapper', key, nextQuestion.questions[key]);
        if (nextQuestion.answers[key].type === 'number') {
            insertBlock('input','.calculator-wrapper', 'inputArea');
            let inputArea = document.querySelector('.inputArea');
            inputArea.type = nextQuestion.answers.whatArea.type;
            inputArea.max = nextQuestion.answers.whatArea.data.max;
            inputArea.min = nextQuestion.answers.whatArea.data.min;
            inputArea.placeholder = nextQuestion.answers.whatArea.data.default;
            inputArea.step = nextQuestion.answers.whatArea.data.step;
        }
        else if (nextQuestion.answers[key].type === 'list') {
            insertBlock('div',`.${key}`, `${key}answers`);
            insertUlLi(nextQuestion.answers[key].data, `.${key}answers`)
        }
    }
}


init()

