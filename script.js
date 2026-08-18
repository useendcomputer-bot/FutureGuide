const careerWeights = {
    "Science & Technology": {
        "Data Scientist": 3,
        "Software Engineer": 3,
        "Doctor": 2,
        "Chartered Accountant": 1,
        "Lawyer": 0,
        "UI/UX Designer": 1
    },

    "Business & Finance": {
        "Data Scientist": 1,
        "Software Engineer": 0,
        "Doctor": 0,
        "Chartered Accountant": 3,
        "Lawyer": 1,
        "UI/UX Designer": 0
    },

    "Medicine & Healthcare": {
        "Data Scientist": 1,
        "Software Engineer": 0,
        "Doctor": 3,
        "Chartered Accountant": 0,
        "Lawyer": 0,
        "UI/UX Designer": 0
    },

    "Law & Civil Services": {
        "Data Scientist": 0,
        "Software Engineer": 0,
        "Doctor": 0,
        "Chartered Accountant": 1,
        "Lawyer": 3,
        "UI/UX Designer": 0
    },

    "Defence": {
        "Data Scientist": 1,
        "Software Engineer": 1,
        "Doctor": 1,
        "Chartered Accountant": 0,
        "Lawyer": 1,
        "UI/UX Designer": 0
    },

    "Arts, Design & Media": {
        "Data Scientist": 0,
        "Software Engineer": 1,
        "Doctor": 0,
        "Chartered Accountant": 0,
        "Lawyer": 0,
        "UI/UX Designer": 3
    },

    "Solving Problems": {
        "Data Scientist": 3,
        "Software Engineer": 3,
        "Doctor": 1,
        "Chartered Accountant": 2,
        "Lawyer": 1,
        "UI/UX Designer": 1
    },

    "Helping Others": {
        "Data Scientist": 0,
        "Software Engineer": 0,
        "Doctor": 3,
        "Chartered Accountant": 0,
        "Lawyer": 2,
        "UI/UX Designer": 1
    },

    "Managing People": {
        "Data Scientist": 1,
        "Software Engineer": 1,
        "Doctor": 1,
        "Chartered Accountant": 2,
        "Lawyer": 3,
        "UI/UX Designer": 1
    },

    "Creating Things": {
        "Data Scientist": 1,
        "Software Engineer": 2,
        "Doctor": 0,
        "Chartered Accountant": 0,
        "Lawyer": 0,
        "UI/UX Designer": 3
    },

    "Analysing Data & Numbers": {
        "Data Scientist": 3,
        "Software Engineer": 2,
        "Doctor": 1,
        "Chartered Accountant": 3,
        "Lawyer": 1,
        "UI/UX Designer": 0
    },

    "Designing & Creative Work": {
        "Data Scientist": 0,
        "Software Engineer": 1,
        "Doctor": 0,
        "Chartered Accountant": 0,
        "Lawyer": 0,
        "UI/UX Designer": 3
    },

    "Leading / Taking Charge": {
        "Data Scientist": 1,
        "Software Engineer": 1,
        "Doctor": 1,
        "Chartered Accountant": 2,
        "Lawyer": 3,
        "UI/UX Designer": 1
    },

    "Exploring & Researching": {
        "Data Scientist": 3,
        "Software Engineer": 2,
        "Doctor": 3,
        "Chartered Accountant": 1,
        "Lawyer": 2,
        "UI/UX Designer": 1
    },

    "Analytical Thinking": {
        "Data Scientist": 3,
        "Software Engineer": 2,
        "Doctor": 1,
        "Chartered Accountant": 3,
        "Lawyer": 2,
        "UI/UX Designer": 0
    },

    "Creativity": {
        "Data Scientist": 1,
        "Software Engineer": 1,
        "Doctor": 0,
        "Chartered Accountant": 0,
        "Lawyer": 0,
        "UI/UX Designer": 3
    },

    "Communication": {
        "Data Scientist": 1,
        "Software Engineer": 1,
        "Doctor": 2,
        "Chartered Accountant": 2,
        "Lawyer": 3,
        "UI/UX Designer": 2
    },

    "Leadership": {
        "Data Scientist": 1,
        "Software Engineer": 1,
        "Doctor": 1,
        "Chartered Accountant": 2,
        "Lawyer": 3,
        "UI/UX Designer": 1
    },

    "Teamwork": {
        "Data Scientist": 1,
        "Software Engineer": 2,
        "Doctor": 3,
        "Chartered Accountant": 2,
        "Lawyer": 2,
        "UI/UX Designer": 2
    },

    "Problem Solving": {
        "Data Scientist": 3,
        "Software Engineer": 3,
        "Doctor": 1,
        "Chartered Accountant": 2,
        "Lawyer": 2,
        "UI/UX Designer": 1
    },

    "Time Management": {
        "Data Scientist": 1,
        "Software Engineer": 2,
        "Doctor": 2,
        "Chartered Accountant": 3,
        "Lawyer": 2,
        "UI/UX Designer": 1
    },

    "Adaptability": {
        "Data Scientist": 2,
        "Software Engineer": 2,
        "Doctor": 2,
        "Chartered Accountant": 2,
        "Lawyer": 2,
        "UI/UX Designer": 2
    },

    "Hard Working": {
        "Data Scientist": 2,
        "Software Engineer": 2,
        "Doctor": 3,
        "Chartered Accountant": 3,
        "Lawyer": 2,
        "UI/UX Designer": 2
    },

    "Curiosity": {
        "Data Scientist": 3,
        "Software Engineer": 2,
        "Doctor": 3,
        "Chartered Accountant": 1,
        "Lawyer": 2,
        "UI/UX Designer": 2
    },

    "Logical Reasoning": {
        "Data Scientist": 3,
        "Software Engineer": 3,
        "Doctor": 1,
        "Chartered Accountant": 3,
        "Lawyer": 3,
        "UI/UX Designer": 1
    },

    "Score well in Exams": {
        "Data Scientist": 1,
        "Software Engineer": 1,
        "Doctor": 2,
        "Chartered Accountant": 2,
        "Lawyer": 2,
        "UI/UX Designer": 0
    },

    "Build Skills & Knowledge": {
        "Data Scientist": 2,
        "Software Engineer": 2,
        "Doctor": 2,
        "Chartered Accountant": 2,
        "Lawyer": 2,
        "UI/UX Designer": 2
    },

    "Get into a Top College": {
        "Data Scientist": 2,
        "Software Engineer": 2,
        "Doctor": 3,
        "Chartered Accountant": 2,
        "Lawyer": 2,
        "UI/UX Designer": 2
    },

    "Start Career Early": {
        "Data Scientist": 1,
        "Software Engineer": 2,
        "Doctor": 0,
        "Chartered Accountant": 1,
        "Lawyer": 1,
        "UI/UX Designer": 2
    },

    "Financial Independence": {
        "Data Scientist": 2,
        "Software Engineer": 2,
        "Doctor": 2,
        "Chartered Accountant": 3,
        "Lawyer": 2,
        "UI/UX Designer": 2
    },

    "Make My Family Proud": {
        "Data Scientist": 1,
        "Software Engineer": 1,
        "Doctor": 3,
        "Chartered Accountant": 2,
        "Lawyer": 2,
        "UI/UX Designer": 1
    },

    "Study Abroad": {
        "Data Scientist": 2,
        "Software Engineer": 2,
        "Doctor": 1,
        "Chartered Accountant": 1,
        "Lawyer": 0,
        "UI/UX Designer": 2
    },

    "Start a Business": {
        "Data Scientist": 1,
        "Software Engineer": 2,
        "Doctor": 1,
        "Chartered Accountant": 3,
        "Lawyer": 1,
        "UI/UX Designer": 2
    }
};


const subjectWeights = {
    "Science & Technology": {
        PCM: 3,
        PCB: 2,
        Commerce: 0,
        Humanities: 0
    },

    "Business & Finance": {
        PCM: 1,
        PCB: 0,
        Commerce: 3,
        Humanities: 1
    },

    "Medicine & Healthcare": {
        PCM: 1,
        PCB: 3,
        Commerce: 0,
        Humanities: 0
    },

    "Law & Civil Services": {
        PCM: 0,
        PCB: 0,
        Commerce: 1,
        Humanities: 3
    },

    "Defence": {
        PCM: 2,
        PCB: 2,
        Commerce: 1,
        Humanities: 1
    },

    "Arts, Design & Media": {
        PCM: 0,
        PCB: 0,
        Commerce: 1,
        Humanities: 3
    },

    "Solving Problems": {
        PCM: 3,
        PCB: 2,
        Commerce: 2,
        Humanities: 1
    },

    "Helping Others": {
        PCM: 1,
        PCB: 3,
        Commerce: 0,
        Humanities: 2
    },

    "Analysing Data & Numbers": {
        PCM: 3,
        PCB: 1,
        Commerce: 3,
        Humanities: 1
    },

    "Creativity": {
        PCM: 1,
        PCB: 1,
        Commerce: 1,
        Humanities: 3
    },

    "Logical Reasoning": {
        PCM: 3,
        PCB: 2,
        Commerce: 3,
        Humanities: 2
    }
};


const questions = [

    [
        "What type of guidance do you need?",
        [
            "Career Oriented",
            "Subject Oriented"
        ]
    ],

    [
        "Which class are you in?",
        [
            "Class 10",
            "Class 11",
            "Class 12"
        ]
    ],

    [
        "Which areas interest you the most?",
        [
            "Science & Technology",
            "Business & Finance",
            "Medicine & Healthcare",
            "Law & Civil Services",
            "Defence",
            "Arts, Design & Media"
        ]
    ],

    [
        "Which activities do you enjoy most?",
        [
            "Solving Problems",
            "Helping Others",
            "Managing People",
            "Creating Things",
            "Analysing Data & Numbers",
            "Designing & Creative Work",
            "Leading / Taking Charge",
            "Exploring & Researching"
        ]
    ],

    [
        "What are your strongest qualities?",
        [
            "Analytical Thinking",
            "Creativity",
            "Communication",
            "Leadership",
            "Teamwork",
            "Problem Solving",
            "Time Management",
            "Adaptability",
            "Hard Working",
            "Curiosity",
            "Logical Reasoning"
        ]
    ],

    [
        "What is your main goal?",
        [
            "Score well in Exams",
            "Build Skills & Knowledge",
            "Get into a Top College",
            "Start Career Early",
            "Financial Independence",
            "Make My Family Proud",
            "Study Abroad",
            "Start a Business"
        ]
    ]
];


let questionNumber = 0;

let answers =
    JSON.parse(
        localStorage.getItem("futureGuideAnswers") || "[]"
    );

let selected = [];


function begin(type) {

    answers = [];

    questionNumber = 1;

    answers[0] = type;

    localStorage.setItem(
        "futureGuideAnswers",
        JSON.stringify(answers)
    );

    window.location.href = "guidance.html";
}


function render() {

    const question = questions[questionNumber];

    if (!document.getElementById("question")) {
        return;
    }

    document.getElementById("question").textContent =
        question[0];

    document.getElementById("progress").innerHTML =
        questions.map(function (_, index) {

            return `
                <i class="${
                    index <= questionNumber ? "on" : ""
                }"></i>
            `;

        }).join("");


    selected =
        Array.isArray(answers[questionNumber])
        ? answers[questionNumber]
        : answers[questionNumber]
            ? [answers[questionNumber]]
            : [];


    document.getElementById("options").innerHTML =
        question[1].map(function (answer) {

            return `
                <button
                    class="option ${
                        selected.includes(answer)
                            ? "selected"
                            : ""
                    }"
                    onclick="choose('${answer}')">

                    <b>${answer}</b>

                    <small>
                        ${
                            questionNumber >= 2
                            ? "Tap to select"
                            : "Select this answer"
                        }
                    </small>

                </button>
            `;

        }).join("");
}


function choose(answer) {

    if (questionNumber >= 2) {

        if (selected.includes(answer)) {

            selected =
                selected.filter(
                    item => item !== answer
                );

        } else {

            selected.push(answer);

        }

        if (selected.length > 3) {
            selected.shift();
        }

        answers[questionNumber] = selected;

    } else {

        answers[questionNumber] = answer;

        selected = [answer];
    }


    localStorage.setItem(
        "futureGuideAnswers",
        JSON.stringify(answers)
    );

    render();
}


function next() {

    if (
        !answers[questionNumber] ||
        (
            Array.isArray(answers[questionNumber]) &&
            answers[questionNumber].length === 0
        )
    ) {

        alert("Please select an answer first.");

        return;
    }


    if (questionNumber < questions.length - 1) {

        questionNumber++;

        render();

    } else {

        calculateScore();

        window.location.href = "results.html";
    }
}


function calculateScore() {

    const careerScore = {

        "Data Scientist": 0,
        "Software Engineer": 0,
        "Doctor": 0,
        "Chartered Accountant": 0,
        "Lawyer": 0,
        "UI/UX Designer": 0

    };


    const subjectScore = {

        PCM: 0,
        PCB: 0,
        Commerce: 0,
        Humanities: 0

    };


    answers.slice(2).forEach(function (answer) {

        const selectedAnswers =
            Array.isArray(answer)
            ? answer
            : [answer];


        selectedAnswers.forEach(function (item) {

            if (careerWeights[item]) {

                Object.keys(careerScore).forEach(
                    function (career) {

                        careerScore[career] +=
                            careerWeights[item][career] || 0;

                    }
                );
            }


            if (subjectWeights[item]) {

                Object.keys(subjectScore).forEach(
                    function (subject) {

                        subjectScore[subject] +=
                            subjectWeights[item][subject] || 0;

                    }
                );
            }

        });

    });


    const sortScores = object =>

        Object.entries(object)
            .sort((a, b) => b[1] - a[1]);


    localStorage.setItem(
        "futureGuideScores",
        JSON.stringify({
            careers: sortScores(careerScore),
            subjects: sortScores(subjectScore)
        })
    );
}


function results() {

    const report = document.getElementById("report");

    if (!report) {
        return;
    }


    const scores =
        JSON.parse(
            localStorage.getItem("futureGuideScores") || "null"
        );


    if (!scores) {

        report.innerHTML = `

            <div class="card">

                <h3>No report yet</h3>

                <p>
                    Complete the guidance questionnaire first.
                </p>

                <a
                    class="btn primary"
                    href="guidance.html">

                    Start Guidance

                </a>

            </div>

        `;

        return;
    }


    const bestCareer = scores.careers[0];

    const bestSubject = scores.subjects[0];


    report.innerHTML = `

        <div class="card">

            <h3>🥇 Best Career Match</h3>

            <h2>${bestCareer[0]}</h2>

            <p>
                Your highest scoring career recommendation.
            </p>

        </div>


        <div class="card">

            <h3>📚 Best Subject Combination</h3>

            <h2>${bestSubject[0]}</h2>

            <p>
                Your highest scoring subject combination.
            </p>

        </div>


        <div class="card">

            <h3>Top Career Matches</h3>

            ${
                scores.careers.map(function (item, index) {

                    return `

                        <div class="row">

                            <span>
                                ${index + 1}. ${item[0]}
                            </span>

                            <span class="score">
                                ${item[1]} points
                            </span>

                        </div>

                    `;

                }).join("")
            }

        </div>


        <div class="card">

            <h3>Subject Matches</h3>

            ${
                scores.subjects.map(function (item, index) {

                    return `

                        <div class="row">

                            <span>
                                ${index + 1}. ${item[0]}
                            </span>

                            <span class="score">
                                ${item[1]} points
                            </span>

                        </div>

                    `;

                }).join("")
            }

        </div>
    `;
}


if (document.getElementById("report")) {
    results();
}
