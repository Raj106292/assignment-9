import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Statistics from './Components/Statistics';
import Topics from './Components/Topics';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home></Home>,
      },
      {
        path:'/home',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home></Home>,
      },
      {
        path:'/quiz/:id',
        loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element: <Topics></Topics>,
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path:'/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/*',
        element: <NotFound></NotFound>,
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
