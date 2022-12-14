import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, List, Paragraph, IconChat, IconHome } from './NavBar.styled';

const NavBar: React.FC = () => {
  const user: boolean = true;

  return (
    <Nav>
      <NavLink to="/" aria-label="Home NavLink">
        <List>
          <IconHome />
          <Paragraph>Home</Paragraph>
        </List>
      </NavLink>
      <NavLink to="/chats" aria-label="Chats NavLink">
        <List>
          <IconChat />
          <Paragraph>Message</Paragraph>
        </List>
      </NavLink>

      {user ? (
        <NavLink to="/" aria-label="Logout NavLink">
          <List>
            <IconChat />
            <Paragraph>logout</Paragraph>
          </List>
        </NavLink>
      ) : (
        <NavLink to="/login" aria-label="Login NavLink">
          <List>
            <IconChat />
            <Paragraph>login</Paragraph>
          </List>
        </NavLink>
      )}
    </Nav>
  );
};

export default NavBar;
