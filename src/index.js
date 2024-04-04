import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Book from './pages/Book/inde';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:'/',
        element:<Main />
      },
      {
        path:'/book/:abbrev',
        element: <Book />
      },
      {
        path:'/login',
        element: <Login />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

reportWebVitals();
