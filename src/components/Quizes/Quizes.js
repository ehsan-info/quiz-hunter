import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../images/quiz-banner.jpg';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'
const Quizes = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data);
    return (
        <div className='quiz-container mx-4'>
            <div className='quiz-banner'>
                <img className='' src={Banner} alt="" />
            </div>
            <div>
                <h2 className='font-mono text-3xl font-bold my-3 text-orange-600'>Explore our all quizes</h2>
                <p className='font-mono font-bold'>Start practicing and enrich your knowledge</p>
                <div className='quiz-list-container grid md:grid-cols-2 gap-8 my-4'>
                    {
                        quizes.data?.map((quiz) => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizes;