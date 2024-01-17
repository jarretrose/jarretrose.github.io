import { FC } from 'react';
import { useNavigation } from './NavigationContext';
import { NavState } from './components.enums';

const NavControls: FC = () => {
  const { setNavState } = useNavigation();

  const onClickHandler = (navState: NavState) => () => {
    console.debug(`Click! Nav State Change: ${navState}`);
    setNavState(navState);
  };

  return (
    <div>
      <ul>
        <li>
          <button onClick={onClickHandler(NavState.Home)}>{`> home`}</button>
        </li>
        <li>
          <button
            onClick={onClickHandler(NavState.Projects)}
          >{`> projects`}</button>
        </li>
        <li>
          <button onClick={onClickHandler(NavState.Info)}>{`> info`}</button>
        </li>
        <li>
          <button
            onClick={onClickHandler(NavState.Contact)}
          >{`> contact`}</button>
        </li>
        <li>
          <button onClick={onClickHandler(NavState.AboutMe)}>{`> me`}</button>
        </li>
      </ul>
    </div>
  );
};

export default NavControls;
