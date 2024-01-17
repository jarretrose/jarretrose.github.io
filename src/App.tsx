import { FC } from 'react';
import MainContentWrapper from './components/MainContentWrapper';
import NavControls from './components/NavControls';
import ViewContentWrapper from './components/ViewContentWrapper';

const App: FC = () => {
  return (
    <MainContentWrapper>
      <h1>Jarret Rose</h1>
      <NavControls />
      <ViewContentWrapper />
    </MainContentWrapper>
  );
};

export default App;
