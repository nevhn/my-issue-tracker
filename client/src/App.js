// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CurrentIssues } from './Pages/CurrentIssues/CurrentIssues';
import { AddIssue } from './Pages/AddIssue/AddIssue';
import { Register } from './Pages/Register/Register';
import { Login } from './Pages/Login/Login';
import { Profile } from './Pages/Profile/Profile';
import { Navbar } from './Components/Navbar';
import { useEffect, useState } from 'react';
import { GlobalStyles } from './GlobalStyles.style';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.token !== 'null' && localStorage.length !== 0) {
      const payload = localStorage.token.split('.')[1];
      const userToken = JSON.parse(atob(payload));
      setUser(userToken);
    }
  }, []);

  console.log('user token:', user);

  return (
    <Router>
      <GlobalStyles />
      <Navbar user={user} />
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
    </Router>
  );
}
export default App;
