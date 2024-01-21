import { FC } from 'react';
import { NavState, NavStateText } from './components.enums';
import { NavLink } from 'react-router-dom';

export const NavControls: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <NavLink to={NavState.HOME}>{NavStateText.HOME}</NavLink>
      <NavLink to={NavState.PROJECTS}>{NavStateText.PROJECTS}</NavLink>
      <NavLink to={NavState.INFO}>{NavStateText.INFO}</NavLink>
      <NavLink to={NavState.ABOUT_ME}>{NavStateText.ABOUT_ME}</NavLink>
      <NavLink to={NavState.CONTACT}>{NavStateText.CONTACT}</NavLink>
    </div>
  );
};
