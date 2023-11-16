import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReservationForm from './ReservationForm';
import ThankYou from './ThankYou'; 
import './styles.css';

const App = () => {
  return (
    <Router basename="/reserve">
      <Switch>
        <Route path="/" exact component={ReservationForm} />
        <Route path="/thankyou" component={ThankYou} />
      </Switch>
    </Router>
  );
};

export default App;
