import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/blog/Blog';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Login from './pages/login/Login';
import ChefDetails from './pages/chefDetails/ChefDetails';
import Register from './pages/register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'register',
        element:<Register></Register>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/chefDetails/:id',
        element: <ChefDetails></ChefDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/singleChef/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
