import { FC, PropsWithChildren } from 'react';
import { NavigationProvider } from './NavigationContext';

const MainContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <NavigationProvider>{children}</NavigationProvider>;
};

export default MainContentWrapper;
