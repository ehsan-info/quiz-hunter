import React from 'react';
const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { id, logo, name, total } = quiz;
    return (
        <div className='border-2 rounded-md border-orange-500 bg-slate-300 py-4'>
            <div className='image-container p-2'>
                <img className='w-80 m-auto' src={logo} alt="" />
            </div>
            <div className='title-container'>
                <h4>Title: {name}</h4>
                <p>Total Quiz: {total}</p>
                <button>Play Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;