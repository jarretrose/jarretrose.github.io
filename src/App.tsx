import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MainTitle } from './components/MainTitle';
import { NavControls } from './components/NavControls';

const styles = {
  display: 'flex',
  flexDirection: 'row' as const,
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const App: FC = () => {
  return (
    <>
      <div style={styles}>
        <MainTitle />
        <NavControls />
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
};
