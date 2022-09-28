let getQuestions = null;
let currentQuestion = null;

async function main() {
  let response = await fetch("http://localhost:3000/questions");
  getQuestions = await response.json();

  let rootQuestion = getNextQuestions(null);

  getHTMLTemplate(rootQuestion.question, rootQuestion.answers[0], rootQuestion.answers[1]);

  
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let answer = (form.querySelector("input[type='radio']:checked")).value;
    currentQuestion = getNextQuestions(answer)
    if (currentQuestion) {
      getHTMLTemplate(currentQuestion.question, currentQuestion.answers[0], currentQuestion.answers[1])
    } else {
      alert('Thanks for taking the survey!')
    }
  });

}

main();




function getNextQuestions(variant) {
    if (!variant) {
        return getQuestions[0];
    }
    return getQuestions[0].subQuestions[variant];
}


function getHTMLTemplate(question, answer1, answer2){
  document.querySelector('.questionary').innerHTML = `<div class="question">${question}</div>
  <br>
  <div class="answer">
  <input name="answer" id="answer1" value="${answer1}" type="radio">
  <span id="a1">${answer1}</span>
  </div>
  <br>
  <div class="answer">
  <input name="answer" id="answer2" value="${answer2}" type="radio">
  <span id="a1">${answer2}</span>
  </div>`
}


// function getAnswersValue() { 
//   document.getElementById("form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     let answer = form.querySelector("input[type='radio']:checked");
//     let answerValue = answer.value;
//     return answerValue
//   });
// } НЕ ПОЙМУ ПОЧЕМУ НЕ ВОЗВРАЩАЕТ ЗНАЧЕНИЕ