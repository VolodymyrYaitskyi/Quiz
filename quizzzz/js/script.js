let quizz = null;
let currentQuestion = null;
let usersAnswers = {};
let currentAnswer = null;
let checkedAnswer = null;

async function init() {
    let response = await fetch("http://localhost:3000/questions");
    quizz = await response.json();

    insertRootQuestion(quizz.question);
    insertUlLi(quizz.answers, '.calculator-item');
    InsertSubmitButton("nextButton");

   let butonnext = document.querySelector(".nextButton")
   butonnext.addEventListener("click", buttonNextClicked);

}

function insertRootQuestion(quizz) {
    insertBlock('div','.calculator-wrapper', 'calculator-item');
    insertBlock('div','.calculator-item', 'calculator-item-title', quizz);
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
         newElementInput.value = quizzJsonAnswers[key].value;
         newElementInput.name = quizzJsonAnswers[key].name;
         newElementInput.type = quizzJsonAnswers[key].type;
         newElementInput.checked = quizzJsonAnswers[key].checked;
         newElementInput.className = 'answers' //quizzJsonAnswers[key].name;
         newElementLi.appendChild(newElementInput);
         let newElementLabel = document.createElement('label');
         newElementLi.appendChild(newElementLabel);
         newElementLabel.innerHTML = quizzJsonAnswers[key].label;
     }
}

function InsertSubmitButton(newBlockClassName, textElement){
    insertBlock('div', ".calculator_buttons_container", newBlockClassName);
    let newElement = document.createElement('button');
    newElement.className = "nextButton";
    (document.querySelector(".nextButton")).appendChild(newElement)
    newElement.innerHTML = 'Далее';
}

function buttonNextClicked(event) {
    event.preventDefault();

    insertCurrentQuestion()

}

function insertCurrentQuestion() {
    let label = document.querySelector('.calculator-item-title')

    let allAnswers = document.querySelectorAll('.answers')
    for (let i = 0; i < allAnswers.length; i++){
        if (allAnswers[i].checked) {
            checkedAnswer = allAnswers[i].value
            usersAnswers[allAnswers[i].name] = allAnswers[i].value
        }
    }


    currentQuestion = getNextQuestion(checkedAnswer)
    currentAnswer = getNextAnswers(checkedAnswer)

    label.innerHTML = currentQuestion
    document.querySelector('ul').remove();
    insertUlLi(currentAnswer, '.calculator-item')
}

function getNextQuestion(variant) {
    if (!quizz.subQuestions[variant]) {
        return quizz.question;
    }
    return quizz.subQuestions[variant].question;
}

function getNextAnswers(variant) {
    if (!quizz.subQuestions[variant]) {
        console.log(usersAnswers)
        alert('That`s it, thank you bro')
        usersAnswers = {};
        return quizz.answers;
    }
    return quizz.subQuestions[variant].answers;
}

init()
