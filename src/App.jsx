import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";  

import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import GetStarted from './Components/GetStarted';
import Shop from './Components/Shop';
import Cart from './Components/cart';

const Layout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'get-started',
        element: <GetStarted  />,
      },
      {
        path: 'get-shopping',
        element: <Shop  />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;