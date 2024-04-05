import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Book from './pages/Book/inde';
import Verses from './pages/verses';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap')
</style>

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
      },
      {
        path:'/verses/acf/:abbrevUrl/:chapterUrl',
        element: <Verses />
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
