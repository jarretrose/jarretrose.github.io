import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { NavState } from './components/components.enums';
import { AboutMe } from './views/About';
import { Contact } from './views/Contact';
import { Home } from './views/Home';
import { Info } from './views/Info';
import { Miscellany } from './views/Miscellany';
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
        path: NavState.HOME,
        element: <Home />,
      },
      {
        path: NavState.PROJECTS,
        element: <Projects />,
      },
      {
        path: NavState.INFO,
        element: <Info />,
      },
      {
        path: NavState.CONTACT,
        element: <Contact />,
      },
      {
        path: NavState.ABOUT,
        element: <AboutMe />,
      },
      {
        path: NavState.MISCELLANY,
        element: <Miscellany />,
      },
    ],
  },
]);
