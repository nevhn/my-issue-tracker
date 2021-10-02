import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CurrentIssues } from './Pages/CurrentIssues/CurrentIssues';
import { AddIssue } from './Pages/AddIssue/AddIssue';
import { Register } from './Pages/Register/Register';
import { Login } from './Pages/Login/Login';
import { Profile } from './Pages/Profile/Profile';
import { Header } from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <CurrentIssues />
        </Route>
        <Route exact path='/add'>
          <AddIssue />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
