import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './views/Home';
import Projects from './views/Projects';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';
import Info from './views/Info';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: 'home',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
