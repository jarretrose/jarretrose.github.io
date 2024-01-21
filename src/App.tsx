import { FC } from 'react';
import NavControls from './components/NavControls';
import { Outlet } from 'react-router-dom';

enum AppTexts {
  NAME = 'Jarret Rose',
}

const App: FC = () => {
  return (
    <div>
      <div>
        <h1>{AppTexts.NAME}</h1>
        <NavControls />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
