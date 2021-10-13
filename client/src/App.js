import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CurrentIssues } from './Pages/CurrentIssues/CurrentIssues';
import { AddIssue } from './Pages/AddIssue/AddIssue';
import { Register } from './Pages/Register/Register';
import { Login } from './Pages/Login/Login';
import { Profile } from './Pages/Profile/Profile';
import { Navbar } from './Components/Navbar';
import { useEffect, useState } from 'react';
import { GlobalStyles } from './GlobalStyles.style';
import { Dropdown } from './Components/Dropdown/Dropdown';

function App() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('toggled');
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isMenuOpen) return setIsMenuOpen(false);
    };

    if (localStorage.token !== 'null' && localStorage.length !== 0) {
      const payload = localStorage.token.split('.')[1];
      const userToken = JSON.parse(atob(payload));
      setUser(userToken);
    }

    window.addEventListener('resize', hideMenu);
    return () => window.removeEventListener('resize', hideMenu);
  }, []);

  // console.log('user token:', user);
  console.log('App.jsx', isMenuOpen);

  return (
    <Router>
      <GlobalStyles />
      <>
        <Navbar toggleMenu={toggleMenu} user={user} />
        <Dropdown isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} user={user} />
        <Switch>
          <Route exact path='/'>
            <CurrentIssues />
          </Route>
          <Route exact path='/add'>
            <AddIssue />
          </Route>
          <Route exact path='/register'>
            {user ? <CurrentIssues /> : <Register />}
          </Route>
          <Route exact path='/login'>
            {user ? <CurrentIssues /> : <Login />}
          </Route>
          <Route exact path='/profile'>
            {!user ? <CurrentIssues /> : <Profile user={user} />}
          </Route>
        </Switch>
      </>
    </Router>
  );
}
export default App;
