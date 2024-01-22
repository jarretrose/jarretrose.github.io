import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AboutMe } from './views/About';
import { Contact } from './views/Contact';
import { Home } from './views/Home';
import { Info } from './views/Info';
import { Projects } from './views/Projects';
import { Miscellany } from './views/Miscellany';
import { NavState } from './components/components.enums';

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
        // index: true,
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
