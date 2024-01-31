import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MainTitle } from './components/MainTitle';
import { NavControls } from './components/NavControls';
import { ViewContainer } from './components/ViewContainer';
import './index.css';
import { Splash } from './views/Splash';

export const App: FC = () => {
  const location = useLocation();

  const isSplash = location.pathname === '/';

  return (
    <div className='container flex flex-col gap-4'>
      <div className='flex flex-row justify-between'>
        <MainTitle />
        <NavControls />
      </div>
      <hr />
      <div>
        <ViewContainer>
          {isSplash && <Splash />}
          <Outlet />
        </ViewContainer>
      </div>
    </div>
  );
};
