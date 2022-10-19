class Requests {
    async postAnswers(answers) {
        await fetch("http://localhost:3000/answers", {
            method: 'POST', headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(answers)
        });
    }

    async getQuizz() {
        let response = await fetch("http://localhost:3000/questions");
        let quizz = await response.json();
        return quizz
    }
}
