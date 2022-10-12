import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails.data);
    return (
        <div>
            <h2>Quiz of {quizDetails.data.name}</h2>
            {
                quizDetails.data.questions.map(questions => <QuizQuestions key={questions.id} questions={questions}></QuizQuestions>)
            }
        </div>
    );
};

export default QuizDetails;