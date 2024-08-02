import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mobiles from './components/Mobiles/Mobiles';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
      },

      {
        path : "/mobiles",
        element : <Mobiles></Mobiles>,
      },

      {
        path : "/about",
        element : <About></About>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
