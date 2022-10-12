import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../images/quiz-banner.jpg';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'
const Quizes = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data);
    return (
        <div className='quiz-container mx-4'>
            <div className='quiz-banner h-80 bg-center bg-no-repeat bg-cover relative bg-slate-300' style={{ backgroundImage: `url(${Banner})` }}>
                {/* <img className='' src={Banner} alt="" /> */}
                <div className='banner-text-container text-center absolute left-2/4 top-1/2 -translate-y-2/4 -translate-x-2/4'>
                    <h2 className='font-mono text-4xl font-bold my-3 text-orange-600'>Welcome To Quiz Hunter !!!!</h2>
                    <p className='text-white banner-text font-mono text-2xl md:block sm:hidden'>The test is not official, it's just a nice way to see how much you know, or don't know.</p>
                    <p className=' text-white mt-5 font-bold'><Link className='bg-orange-500 hover:bg-orange-600 px-10 py-2 rounded-md' to='/blog'>Check Blog</Link></p>
                </div>
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