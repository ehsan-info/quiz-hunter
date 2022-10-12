import React, { useState } from 'react';
import { EyeIcon, StopCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuizQuestions = ({ questions }) => {
    const { id, correctAnswer, question, options } = questions;
    const processedQuestion = question.replace(/&nbsp;/gi, ' ').slice(3, -4);
    const setClicked = (questionText) => {
        if (questionText === correctAnswer) {
            toast.success('Correct Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error('Wrong Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    const showCorrectAnswer = () => {
        toast.info(`coorect answer is: ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    return (
        <div className='question-lists'>
            <div className='my-4 border-2 rounded-md border-orange-500 bg-slate-300 p-4'>
                <div className='flex justify-between my-4'>
                    <p>{processedQuestion}</p>
                    <Link onClick={showCorrectAnswer}><EyeIcon className="h-6 w-6" /></Link>
                </div>
                <div className=''>
                    <div className='grid grid-cols-2 gap-4 items-center'>
                        <button onClick={() => setClicked(`${options[0]}`)} className='flex items-center p-4 border-2 rounded-md w-2/4 hover:bg-orange-200'><StopCircleIcon className="h-4 w-4 mr-2" />{options[0]}</button>
                        <button onClick={() => setClicked(`${options[1]}`)} className='flex items-center p-4 border-2 rounded-md w-2/4 hover:bg-orange-200'><StopCircleIcon className="h-4 w-4 mr-2" />{options[1]}</button>
                        <button onClick={() => setClicked(`${options[2]}`)} className='flex items-center p-4 border-2 rounded-md w-2/4 hover:bg-orange-200'><StopCircleIcon className="h-4 w-4 mr-2" />{options[2]}</button>
                        <button onClick={() => setClicked(`${options[3]}`)} className='flex items-center p-4 border-2 rounded-md w-2/4 hover:bg-orange-200'><StopCircleIcon className="h-4 w-4 mr-2" />{options[3]}</button>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuizQuestions;