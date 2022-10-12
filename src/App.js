import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Quizes from './components/Quizes/Quizes';
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
        { path: '/blog', element: <Blog></Blog> },
        { path: '/about', element: <About></About> },
      ]
    },
    { path: '*', element: <div>404 This route is not found</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
