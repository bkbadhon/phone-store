import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

import Mobiles from './components/Mobiles/Mobiles';
import AddProduct from './components/Add Product/AddProduct';
import Cart from './components/Cart/Cart';
import AuthProvider from './Provider/AuthProvider';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CartView from './components/CartView/CartView';
import Update from './components/Update/Update';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Service from './components/Service/Service';

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
        path : "/add",
        element : <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },

      {
        path : "/register",
        element : <Register></Register>
      },

      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/service",
        element : <Service></Service>
      },
      {
        path : "/cart",
        element : <PrivateRoute><CartView></CartView></PrivateRoute>
      },
      {
        path : "/phones/:id",
        element :<PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: ()=> fetch('https://phone-store-server-badhons-projects.vercel.app/phones')
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader :({params}) => fetch(`https://phone-store-server-badhons-projects.vercel.app/cart/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
