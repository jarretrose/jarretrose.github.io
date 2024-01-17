import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { NavState } from './components.enums';

// Create a context for the navigation state
const NavigationContext = createContext<
  | {
      navState: NavState;
      setNavState: Dispatch<SetStateAction<NavState>>;
    }
  | undefined
>(undefined);

// Create a provider component to wrap the app
export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [navState, setNavState] = useState<NavState>(NavState.Home);

  const value = {
    navState,
    setNavState,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to access the navigation context
export const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

// Usage example in a component
// Wrap your app with <NavigationProvider> at the top level
// Use the custom hook useNavigation to access the navigation context

// In a component where you want to set the navigation state
// const { setNavState } = useNavigation();
// setNavState(NavState.Projects);

// In a component where you want to access the navigation state
// const { navState } = useNavigation();
// Use navState to conditionally render components based on the current location
