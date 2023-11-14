// App.js

import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReservationForm from './components/ReservationForm';
import ThankYou from './components/ThankYou'; // Create ThankYouPage component
import './styles.css';

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={ReservationForm} />
        <Route path="/thankyou" component={ThankYou} />
      </Switch>
    </Router>
  );
};

export default App;
