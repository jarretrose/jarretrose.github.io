import { FC } from 'react';
import NavControls from './components/NavControls';
import { Outlet } from 'react-router-dom';

const App: FC = () => {
  return (
    <div>
      <div>
        <h1>Jarret Rose</h1>
        <NavControls />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
