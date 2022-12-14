import React from 'react';
import { Bar, HeaderWrapper } from './AppBar.styled';
import { Container } from '../../../Common/Container.styled';
import NavBar from '../../smart/NavBar/NavBar';
import Logo from '../Logo';

const AppBar: React.FC = () => {
  return (
    <Bar>
      <Container>
        <HeaderWrapper>
          <Logo />
          <NavBar></NavBar>
        </HeaderWrapper>
      </Container>
    </Bar>
  );
};

export default AppBar;
