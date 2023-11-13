// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReservationForm from './ReservationForm';
import ThankYouPage from './ThankYou'; // Create ThankYouPage component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ReservationForm} />
        <Route path="/reserve/thankyou" component={ThankYouPage} />
      </Switch>
    </Router>
  );
};

export default App;
