// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import your global styles if you have any
// import Navbar from './Navbar';
// import Footer from './Footer';


ReactDOM.render(
  <React.StrictMode>
    
    {/* <Navbar/> */}
    <App />
    {/* <Footer /> */}

  </React.StrictMode>,
  document.getElementById('root')
);
