export const jsQuizz = {
  questions: [
    {
      question:
        "Which of the following is used in React.js to increase performance?",
      choices: [
        "Virtual DOM",
        "Original DOM",
        "Both A and B",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "Virtual DOM",
    },
    {
      question: "What is ReactJS?",
      choices: [
        "Server-side framework",
        "User Interface framework",
        "both a and b",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },
    {
      question:
        "Identify the one which is used to pass data to components from outside",
      choices: ["Render with arguments", "setState", "PropTypes", "props"],
      type: "MCQs",
      correctAnswer: "props",
    },
    {
      question: "In which language is React.js written?",
      choices: ["Python", "Java", "C#", "JavaScript"],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },
    {
      question: "What is Babel?",
      choices: [
        "JavaScript interpreter",
        "JavaScript transpiler",
        "JavaScript compiler",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript compiler",
    },
    {
      question: "Which artist painted the famous painting 'The Starry Night'?",
      choices: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Claude Monet",
        "Johannes Vermeer",
      ],
      type: "MCQs",
      correctAnswer: "Vincent van Gogh",
    },
    {
      question: "What is the chemical symbol for copper?",
      choices: ["Cu", "Zn", "Ag", "Au"],
      correctAnswer: "A",
    },

    {
      type: "MCQs",
      question:
        "Which of the following planets in our solar system is no longer considered a planet, but a dwarf planet?",
      choices: ["Mars", "Venus", "Pluto", "Neptune"],
      correctAnswer: "Pluto",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
