// App.js

import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReservationForm from './components/ReservationForm';
import ThankYouPage from './components/ThankYou'; // Create ThankYouPage component
import './styles.css';

const App = () => {
  return (
    <Router basename="/reserve">
      <Switch>
        <Route exact path="/" component={ReservationForm} />
        <Route path="/thankyou" component={ThankYouPage} />
      </Switch>
    </Router>
  );
};

export default App;
