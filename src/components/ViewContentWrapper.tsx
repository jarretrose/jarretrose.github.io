import { FC } from 'react';
import AboutMe from '../views/AboutMe';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Info from '../views/Info';
import Projects from '../views/Projects';
import { useNavigation } from './NavigationContext';
import { NavState } from './components.enums';

const ViewContentWrapper: FC = () => {
  const { navState } = useNavigation();

  return (
    <>
      {navState === NavState.Home && <Home />}
      {navState === NavState.Projects && <Projects />}
      {navState === NavState.Info && <Info />}
      {navState === NavState.Contact && <Contact />}
      {navState === NavState.AboutMe && <AboutMe />}
    </>
  );
};

export default ViewContentWrapper;
