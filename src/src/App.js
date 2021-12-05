import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import JobDetail from './routes/jobDetail';
import JobList from './routes/jobList';
import './style.css';


const App = ()  => {
  return (
    <BrowserRouter >
      <div className="container">
      <p><strong>Github</strong> Jobs</p>
      <Switch>
        <Route exact path="/" component={JobList} />
        <Route exact path="/jobdetail/:id" component={JobDetail } />
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;


