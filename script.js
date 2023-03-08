const quizData = [
    {
        question: "Como Goku matou Freeza ?",
        a: "Com a Genki Dama",
        b: "Com um super Kamehameha",
        c: "Goku não derrotou Freeza",
        d: "Nenhuma das opções a cima",
        correct: "b",
    },
    {
        question: "Quem derrotou Jeice, membro das Forças Especias Ginyu ?",
        a: "Gohan e Kuririn",
        b: "Vegeta",
        c: "Goku",
        d: "Ginyu no corpo de Goku",
        correct: "b",
    },
    {
        question: "Quem matou Zamasu pela primeira vez no anime ?",
        a: "Bills",
        b: "Vegeto",
        c: "Trunks",
        d: "Zeno Sama",
        correct: "a",
    },
    {
        question: "Com quais transformações Goku nunca derrotou um adversário ?",
        a: "Super sayajin God e Super sayajin Blue",
        b: "Super sayajin 2 e Super sayajin God",
        c: "Super sayajin 1 e Super sayajin 2",
        d: "Super sayajin 3 e Super sayajin 4",
        correct: "b",
    },
    {
        question: "Em qual episódio de DBZ Freeza assassina Kuririn ?",
        a: "93",
        b: "95",
        c: "94",
        d: "96",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${quizData.length} perguntas.</h2>

                <button onclick="location.reload()">recarregar</button>
            `;
        }
    }
});
