import React, { useState } from 'react';
import { EyeIcon, StopCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizQuestions.css'
const QuizQuestions = ({ questions, qId }) => {
    const { id, correctAnswer, question, options } = questions;
    const processedQuestion = question.replace(/&nbsp;/gi, ' ').slice(3, -4);

    const setClicked = (questionText, event) => {
        console.log(questionText)
        if (questionText === correctAnswer) {
            toast.success('Correct Answer, Well Done !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error('Wrong Answer, Try Again !', {
                position: toast.POSITION.TOP_CENTER
            });
            toast.info(`correct answer is: ${correctAnswer}`, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    const showCorrectAnswer = () => {
        toast.info(`correct answer is: ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    return (
        <div className='question-lists'>
            <div className='my-4 border-2 rounded-md border-orange-500 bg-slate-300 p-4'>
                <div className='flex justify-between my-4'>
                    <p>Question {qId + 1}: {processedQuestion}</p>
                    <Link onClick={showCorrectAnswer}><EyeIcon className="h-6 w-6 hover:text-orange-600" /></Link>
                </div>
                <div className=''>
                    <div className='grid md:grid-cols-2 gap-4 items-center'>
                        {
                            options.map((option, idx) => <button onClick={() => setClicked(`${option}`)} className={` flex items-center p-4 border-2 rounded-md  text-left hover:bg-orange-600 h-24`} key={idx}><StopCircleIcon className="h-4 w-4 mr-2" />{option}</button>)

                        }
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuizQuestions;