import { FC } from 'react';
import { NavState, NavStateText } from './components.enums';
import { NavLink } from 'react-router-dom';

export const NavControls: FC = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={NavState.HOME}>{NavStateText.HOME}</NavLink>
        </li>
        <li>
          <NavLink to={NavState.PROJECTS}>{NavStateText.PROJECTS}</NavLink>
        </li>
        <li>
          <NavLink to={NavState.INFO}>{NavStateText.INFO}</NavLink>
        </li>
        <li>
          <NavLink to={NavState.ABOUT_ME}>{NavStateText.ABOUT_ME}</NavLink>
        </li>
        <li>
          <NavLink to={NavState.CONTACT}>{NavStateText.CONTACT}</NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};
