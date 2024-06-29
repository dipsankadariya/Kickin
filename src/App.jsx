import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;