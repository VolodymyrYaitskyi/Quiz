fetch("questions.json")
.then(function(response){
return response.json();
})

.then(function(getQuestions){
    let placeQuestion = document.querySelector("#q");
     let placeAnswer1 = document.querySelector("#a1");
     let placeAnswer2 = document.querySelector("#a2");
     placeAnswer1.innerHTML = getQuestions.answers1[0];
     placeAnswer2.innerHTML = getQuestions.answers1[1];
    placeQuestion.innerHTML = getQuestions.question1;

    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();
        let answer = form.querySelector("input[type='radio']:checked");
        let answerValue = answer.value;
        console.log(answerValue);

        if (answerValue == getQuestions.answers1[0]) {
            placeQuestion.innerHTML = getQuestions.question2;
            placeAnswer1.innerHTML = getQuestions.answers2[0];
            document.getElementById('answer1').value='Yes';
            placeAnswer2.innerHTML = getQuestions.answers2[1];
            document.getElementById('answer2').value='No';
        } else if (answerValue == getQuestions.answers1[1]) {
            placeQuestion.innerHTML = getQuestions.question3;
            placeAnswer1.innerHTML = getQuestions.answers3[0];
            document.getElementById('answer1').value='Less than a year';
            placeAnswer2.innerHTML = getQuestions.answers3[1];
            document.getElementById('answer2').value='More than a year';
        }

        if (answerValue == getQuestions.answers3[1]) {
            placeQuestion.innerHTML = getQuestions.question4;
            placeAnswer1.innerHTML = getQuestions.answers4[0];
            document.getElementById('answer1').value='Yes';
            placeAnswer2.innerHTML = getQuestions.answers4[1];
            document.getElementById('answer2').value='No';
        }
    })

    
});





