import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { MainTitle } from './views/MainTitle';
import { NavControls } from './components/NavControls';
import { ViewContainer } from './views/ViewContainer';
import './index.css';

const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className='container mt-12 flex flex-col gap-4'>{children}</div>;
};

const AppContents: FC = () => {
  return (
    <>
      <div className='flex flex-row justify-between items-center'>
        <MainTitle />
        <NavControls />
      </div>
      <hr />
      <div>
        <ViewContainer>
          <Outlet />
        </ViewContainer>
      </div>
    </>
  );
};

export const App: FC = () => {
  return (
    <AppContainer>
      <AppContents />
    </AppContainer>
  );
};
