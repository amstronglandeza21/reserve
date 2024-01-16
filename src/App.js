import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReservationForm from './ReservationForm';
import ThankYou from './ThankYou'; 
import Navbar from './Navbar';
import Footer from './Footer';


import './styles.css';

const App = () => {
  return (
    <Router>

<Navbar/>

      <Switch>
          
        <Route path="/" exact component={ReservationForm} />
        <Route path="/thankyou" component={ThankYou} />

     
        
      </Switch>
      
<Footer/>

    </Router>
  );
};

export default App;
