import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Quizes></Quizes>
        },
        {
          path: '/quizes',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Quizes></Quizes>
        },
        {
          path: '/quizes/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '/statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>,
        },
        { path: '/blog', element: <Blog></Blog> },
      ]
    },
    {
      path: '*',
      element: <div className='font-mono my-3'>
        <p className='text-6xl font-bold my-3 text-orange-600'>404</p>
        <p className='text-7xl font-bold my-3 text-zinc-500'>This route is not found</p>
        <p className=' text-zinc-500'>Go to <Link className='text-blue-700 underline font-bold' to='/quizes'>Home Page</Link></p>
      </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
