import React from 'react';
import { useNavigate } from 'react-router-dom';
const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { id, logo, name, total } = quiz;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quizes/quiz/${id}`)
    }
    return (
        <div className='border-2 rounded-md border-orange-500 bg-slate-300 py-4'>
            <div className='image-container p-2'>
                <img className='w-80 m-auto' src={logo} alt="" />
            </div>
            <div className='title-container'>
                <h4>Title: {name}</h4>
                <p>Total Quiz: {total}</p>
                <button onClick={handleNavigate} quiz={quiz}>Play Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;