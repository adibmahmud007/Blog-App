import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Posts from './components/Posts/Posts';
import POstDetails from './components/PostDetails/POstDetails';
import App from './App';

const router= new createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'posts',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: 'footer',
        element: <Footer></Footer>
      },
      {
        path: '/post/:postId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <POstDetails></POstDetails>
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
