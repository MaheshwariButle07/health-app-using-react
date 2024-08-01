import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./global.css"
import Home from './views/Home/Home';
import SignUp from './views/SignUp/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
},
{
  path: '/signup',
  element: <SignUp />
},
{
  path: '*',
  element: '404 Not Found'
}
])


root.render(<RouterProvider router={router}/>)


