import React from 'react';

const Blog = () => {
    return (
        <div className='text-start font-mono mx-4'>
            <h1 className='text-3xl font-bold my-6 text-orange-600 text-center'>Question - Answers Session</h1>
            <h2 className='text-orange-600 font-bold my-6 text-2xl'>1. What is the purpose of the React Router?</h2>
            <p>React Router allow us to build single page application with navigation. It doesnt refresh the page while navigating through different pages. It is the standard library of react routing.</p>
            <h2 className='text-orange-600 font-bold my-6 text-2xl'>2. How does Context API work?</h2>
            <p>Context API just make the passing props system so easy. It allows an easy way to share global data between multiple components and for that we dont need to pass it as props anymore. Problem named Prop Drilling has been solved due to this. Here it returns a consumer and provider. Provider provides the state to the children and consumer uses the state.</p>
            <h2 className='text-orange-600 font-bold my-6 text-2xl'>3. What is useRef?</h2>
            <p>useRef is a React hook. It let us reference a value that need not to be rendered.It can be used to store mutable value that doesnt cause a re-render and also be used to access DOM element. It returns only one item which is object</p>
        </div>
    );
};

export default Blog;