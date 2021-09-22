import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CurrentIssues } from './Pages/CurrentIssues';
import { AddIssue } from './Pages/AddIssue';
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='header'>
          <h1 className='header-title'>Issue tracker</h1>
        </div>
      </div>
      <Switch>
        <Route exact path='/'>
          <CurrentIssues />
        </Route>
        <Route exact path='/add-issue'>
          <AddIssue />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
