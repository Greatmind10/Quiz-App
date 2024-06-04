import { useState } from "react";
import React from 'react'

const Quiz = ({ questions }) => {
    const [currentquestion, setCurrentQuestion] = useState(0)
    const [answerIdz, setAnswerIdz] = useState(null)
    onst[answer, setAnswer] = useState(null)

    //line 12 is for displaying the total question asked, length of the question will give us this
    //the answer to each question is displaced as a list with the <ul> tag by mapping through the choices
    const { question, choices, correctAnswer } = questions[currentquestion]

    const onAnswerClick = (answer, index) => {
        setAnswerIdz(index)
        if (answer === correctAnswer) {
            setAnswer(true);

        } else {
            setAnswer(false)
        }

    }


}
return (
    <div className='quiz-container'>
        <>
            <span className="active-question-no">{currentquestion + 1}</span>
            <span className="total-questions">/{questions.length}</span>
            <h2>{question}</h2>
            <ul>
                {
                    choices.map((answer, index) => (

                        <li
                            onClick={() => onAnswerClick(answer, index)}

                            key={answer}>
                            className= {answerIdz === index ? "selected-answer" : null}


                            {answer}
                        </li>


                    ))

                }

            </ul>

        </>


    </div>
);



export default Quiz 