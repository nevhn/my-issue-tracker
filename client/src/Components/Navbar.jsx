import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Nav,
  LeftDiv,
  Logo,
  HeaderSpan,
  CenterDiv,
  Ul,
  Li,
  Menu,
  MenuButton,
  MenuSvg,
  Anchor,
} from '../Components/Navbar.style';

export const Navbar = ({ user }) => {
  // const [isUser, setIsUser] = useState(null);
  // const [token, setToken] = useState();
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
  console.log('user:', user);
  return (
    <Nav>
      <LeftDiv>
        <Link to='/'>
          <Logo />
        </Link>
        <HeaderSpan>
          <Link to='/'>ISSUE TRACKER </Link>
        </HeaderSpan>
      </LeftDiv>
      <Menu>
        <MenuButton>
          <MenuSvg />
        </MenuButton>
      </Menu>
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
      </CenterDiv>
      <div>
        {user ? <Anchor onClick={() => handleLogout()}>LOGOUT</Anchor> : null}
      </div>
    </Nav>
  );
};
