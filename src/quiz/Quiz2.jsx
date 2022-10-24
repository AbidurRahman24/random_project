import React, { useState } from 'react';
const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];
const Quiz2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const handleQuestionAnswerClick = (isCorrect) =>{
        if (isCorrect){
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }
        else{
            setShowScore(true)
        }
    }
    return (
        <div>
            {
                showScore ? (
                   <p>score {score}</p>
                ) : (
                    <>
                    {
                questions[currentQuestion].questionText
            }
           {
            questions[currentQuestion].answerOptions.map(answerOption =>(
                <button onClick={()=>handleQuestionAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))
           }
                    </>
                )
            }
        </div>
    );
};

export default Quiz2;