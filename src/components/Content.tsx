import { Outlet } from 'react-router-dom';
import { NavControls } from './NavControls';
import { AppTexts } from '../main.enums';

export const Content = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>{AppTexts.NAME}</h1>
        <NavControls />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
