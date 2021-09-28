import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CurrentIssues } from './Pages/CurrentIssues';
import { AddIssue } from './Pages/AddIssue';
import { useEffect, useState } from 'react';
import { Register } from './Pages/Register';
function App() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const fetchIssues = async () => {
      const response = await axios.get('/issues');
      setIssues(response.data);
    };

    fetchIssues();
  }, []);

  console.log('list of current issues: ', issues);
  return (
    <Router>
      <div className='App'>
        <div className='header'>
          <h1 className='header-title'>Issue tracker</h1>
        </div>
      </div>
      <Switch>
        <Route exact path='/'>
          <CurrentIssues issues={issues} />
        </Route>
        <Route exact path='/add'>
          <AddIssue />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
