import { FC } from 'react';
import { NavState } from './components.enums';

const NavControls: FC = () => {
  return (
    <div>
      <ul>
        <li>
          <a href={NavState.HOME}>{NavState.HOME}</a>
        </li>
        <li>
          <a href={NavState.PROJECTS}>{NavState.PROJECTS}</a>
        </li>
        <li>
          <a href={NavState.INFO}>{NavState.INFO}</a>
        </li>
        <li>
          <a href={NavState.CONTACT}>{NavState.CONTACT}</a>
        </li>
        <li>
          <a href={NavState.ABOUT_ME}>{NavState.ABOUT_ME}</a>
        </li>
      </ul>
    </div>
  );
};

export default NavControls;
