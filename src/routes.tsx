import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AboutMe } from './views/AboutMe';
import { Contact } from './views/Contact';
import { Home } from './views/Home';
import { Info } from './views/Info';
import { Projects } from './views/Projects';

export const router = createBrowserRouter([
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
