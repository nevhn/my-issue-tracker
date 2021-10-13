import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Nav,
  LeftDiv,
  RightDiv,
  Logo,
  HeaderSpan,
  CenterDiv,
  Ul,
  Li,
  Menu,
  MenuDiv,
  // MenuButton,
  // MenuSvg,
  Anchor,
} from '../Components/Navbar.style';

export const Navbar = ({ user, toggleMenu }) => {
  // const [isUser, setIsUser] = useState(null);
  // const [token, setToken] = useState();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  // useEffect(() => {
  //   if (localStorage.token != 'null' && localStorage.length != 0) {
  //     const payload = localStorage.token.spLit('.')[1];
  //     const token = JSON.parse(atob(payload));
  //     setToken(token);
  //     setIsUser(true);
  //   }
  // }, []);

  const handleLogout = () => {
    console.log('logged out');
    localStorage.setItem('token', null);
    window.location.replace('/');
  };

  // console.log(path);
  // console.log('user:', user);
  console.log('Navbar:', typeof toggleMenu);
  return (
    <Nav role='navigation'>
      <LeftDiv>
        <Link to='/'>
          <Logo />
        </Link>
        <HeaderSpan>
          <Link to='/'>ISSUE TRACKER </Link>
        </HeaderSpan>
      </LeftDiv>
      <MenuDiv onClick={toggleMenu}>
        <Menu />
      </MenuDiv>
      <CenterDiv>
        <Ul>
          {user ? (
            <Li>
              <Link to='/profile'>PROFILE</Link>
            </Li>
          ) : (
            <Li>
              <Link to='/login'>LOGIN</Link>
            </Li>
          )}

          {!user ? (
            <Li>
              <Link to='/register'>REGISTER</Link>
            </Li>
          ) : null}

          <Li>
            <Link to='/add'>ADD ISSUE</Link>
          </Li>
          <Li>
            <Link to='/'>CURRENT ISSUES</Link>
          </Li>
        </Ul>
        <RightDiv>
          {user ? <Anchor onClick={() => handleLogout()}>LOGOUT</Anchor> : null}
        </RightDiv>
      </CenterDiv>
    </Nav>
  );
};
