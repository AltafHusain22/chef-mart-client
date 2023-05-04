/* eslint-disable no-unused-vars */
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
import AuthContextProvider from './Context/AuthContextProvider';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthRequired from './components/AuthRequired/AuthRequired';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/chefDetails/:id',
        element: <AuthRequired><ChefDetails></ChefDetails></AuthRequired>,
        loader: ({params})=> fetch(`https://chefs-server-altafhusain22.vercel.app/singleChef/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
    
 
    
  
)
