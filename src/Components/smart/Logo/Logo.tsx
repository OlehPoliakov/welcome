import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logotype } from './Logo.styled';

const Logo: React.FC = () => {
  return (
    <NavLink to={'/'} aria-label="Site logotype">
      <Logotype>WA</Logotype>
    </NavLink>
  );
};

export default Logo;
