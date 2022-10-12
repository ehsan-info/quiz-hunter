import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
const QuizQuestions = ({ questions }) => {
    const { id, correctAnswer, question, options } = questions;
    const processedQuestion = question.replace(/&nbsp;/gi, ' ').slice(3, -4);
    return (
        <div className='question-lists'>
            <div className='my-4 border-2 rounded-md border-orange-500 bg-slate-300 p-4'>
                <div className='flex justify-between my-4'>
                    <p>{processedQuestion}</p>
                    <Link><EyeIcon className="h-6 w-6" /></Link>
                </div>
                <div className=''>
                    <div className='grid grid-cols-2 gap-4'>
                        <button>{options[0]}</button>
                        <button>{options[1]}</button>
                        <button>{options[2]}</button>
                        <button>{options[3]}</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuizQuestions;