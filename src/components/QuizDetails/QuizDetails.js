import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails.data);
    return (
        <div>
            <h2 className='font-mono text-3xl font-bold my-3 text-orange-600'>Quiz of {quizDetails.data.name} (Total questions are: {quizDetails.data.total})</h2>
            {
                quizDetails.data.questions.map((questions, idx) => <QuizQuestions key={questions.id} questions={questions} qId={idx}></QuizQuestions>)
            }
        </div>
    );
};

export default QuizDetails;