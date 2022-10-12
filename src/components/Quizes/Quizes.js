import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../images/quiz-banner.jpg';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'
const Quizes = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data);
    return (
        <div className='quiz-container'>
            <div className='quiz-banner'>
                <img className='' src={Banner} alt="" />
            </div>
            <div>
                <div className='quiz-list-container grid grid-cols-2 gap-8 my-4'>
                    {
                        quizes.data?.map((quiz) => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizes;