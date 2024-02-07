import { FC } from 'react';
import { NavState, NavStateText } from './components.enums';
import { NavLink } from 'react-router-dom';
import './index.components.css';

export const NavControls: FC = () => {
  return (
    <div className='flex-1 flex flex-row justify-end gap-x-16'>
      <NavLink to={NavState.HOME}>{NavStateText.HOME}</NavLink>
      <NavLink to={NavState.PROJECTS}>{NavStateText.PROJECTS}</NavLink>
      <NavLink to={NavState.INFO}>{NavStateText.INFO}</NavLink>
      <NavLink to={NavState.CONTACT}>{NavStateText.CONTACT}</NavLink>
      {/* TODO: Add these pages */}
      {/* <NavLink to={NavState.ABOUT}>{NavStateText.ABOUT}</NavLink> */}
      {/* <NavLink to={NavState.MISCELLANY}>{NavStateText.MISCELLANY}</NavLink> */}
    </div>
  );
};
