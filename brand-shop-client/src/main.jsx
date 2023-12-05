import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Login/Login';
import { ThemeProvider } from "@material-tailwind/react";
import Registration from './Registration/Registration';
import Home from './Home/Home';
import AddProduct from './Add Product/AddProduct';
import Products from './Products/Products';
import BrandProducts from './Brand Products/BrandProducts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProductDetails from './Product Details/ProductDetails';
import Update from './Update/Update';
import Cart from './Cart/Cart';
import ErrorPage from '../Error Page/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        loader: ()=>fetch("/brands.json"),
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <PrivateRoute><Products></Products></PrivateRoute>
      },
      {
        path: "/brandproducts",
        element:<PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>
      },
      {
        path: "/details/:id",
        loader: ({params})=>fetch(`https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/products/${params.id}`),
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path: "/update/:id",
        loader: ({params})=>fetch(`https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/products/${params.id}`),
        element:<PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/registration",
        element:<Registration></Registration>
      },
      {
        path: "/addproduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/cart",
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
