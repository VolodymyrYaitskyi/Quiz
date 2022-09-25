let getQuestions = null;

async function main() {
  let response = await fetch("questions.json");

  getQuestions = await response.json();

  let root = getNextQuestions(null);

  // get template with root node value
  // insert html

  let placeQuestion = document.querySelector("#q");
  let placeAnswer1 = document.querySelector("#a1");
  let placeAnswer2 = document.querySelector("#a2");
  placeAnswer1.innerHTML = getQuestions.answers1[0];
  placeAnswer2.innerHTML = getQuestions.answers1[1];
  placeQuestion.innerHTML = getQuestions.question1;

  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let answer = form.querySelector("input[type='radio']:checked");
    let answerValue = answer.value;
    console.log(answerValue);

    // get answer
    // getNextQuestions(answer)

    if (answerValue == getQuestions.answers1[0]) {
      placeQuestion.innerHTML = getQuestions.question2;
      placeAnswer1.innerHTML = getQuestions.answers2[0];
      document.getElementById("answer1").value = "Yes";
      placeAnswer2.innerHTML = getQuestions.answers2[1];
      document.getElementById("answer2").value = "No";
    } else if (answerValue == getQuestions.answers1[1]) {
      placeQuestion.innerHTML = getQuestions.question3;
      placeAnswer1.innerHTML = getQuestions.answers3[0];
      document.getElementById("answer1").value = "Less than a year";
      placeAnswer2.innerHTML = getQuestions.answers3[1];
      document.getElementById("answer2").value = "More than a year";
    }

    if (answerValue == getQuestions.answers3[1]) {
      placeQuestion.innerHTML = getQuestions.question4;
      placeAnswer1.innerHTML = getQuestions.answers4[0];
      document.getElementById("answer1").value = "Yes";
      placeAnswer2.innerHTML = getQuestions.answers4[1];
      document.getElementById("answer2").value = "No";
    }
  });
}

main();


let currentQuestion = null;

function getNextQuestions(variant) {
    if (!variant) {
        return getQuestions;
    }
    return currentQuestion.subQuestions[variant];
}
