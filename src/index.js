import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReservationForm from './ReservationForm';

const App = () => {
  return (
    <div>
      {/* ... (your navigation bar) */}
      <nav>
        <a className="navbar-brand" href="https://trimexcolleges.edu.ph/">
          <img src="https://drive.google.com/uc?id=1AZ-d0WyBy-8C0zbqAyw_DhoCtN3pXZCD" width="195" height="45" alt="trimexcolleges" />
        </a>
      </nav>

      <ReservationForm />
      {/* ... (your footer) */}
      <div class="footer" id="page-footer">
        <p>&copy; 2023 Reservenow. All rights reserved.</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
