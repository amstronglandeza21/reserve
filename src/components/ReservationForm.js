import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import Footer from '../Footer';


// Import necessary React modules


// Functional component for the form
const ReservationForm = () => {
  // State variables to manage form data
  const [formData, setFormData] = useState({
    FIRSTNAME: '',
    LASTNAME: '',
    CONTACTNO: '',
    BIRTHDAY: '',
    EMAIL: '',
    COURSE: '',
  });

  // State variable for the course dropdown options
  const [courseOptions, setCourseOptions] = useState([]);
  // const history = useHistory();

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch data from Google Apps Script endpoint
      const response = await fetch('https://script.google.com/macros/s/AKfycbzCna4DAZb7lMUvwfEwubHnC4UwoRc5qDf0kbx046KTFvZte6d7ogqsdsxao-4HQ-6O/exec', {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();

      // Check the 'result' property in the response
      if (data.result === 'success') {
        
        window.location.href = '/reserve-success'
        // history.push(process.env.PUBLIC_URL + '/thankyou');
        // history.push('/thankyou');
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // Function to populate course dropdown options
  const populateCourseDropdown = () => {
    fetch('https://script.google.com/macros/s/AKfycbzCna4DAZb7lMUvwfEwubHnC4UwoRc5qDf0kbx046KTFvZte6d7ogqsdsxao-4HQ-6O/exec')
      .then(response => response.json())
      .then(data => {
        setCourseOptions(data.data.map(course => ({ value: course.course, text: course.course })));
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  // useEffect hook to populate course dropdown options on component mount
  useEffect(() => {
    populateCourseDropdown();
  }, []);

  return (

    <div>
    {/* Navbar */}
  
    <Navbar/>
      {/* Navbar content */}
  

    <div className="container" id="content-container">

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="Firstname" className="form-label">First Name*</label>
            <input
              id="Firstname"
              className="form-control"
              type="text"
              name="FIRSTNAME"
              placeholder="Enter First Name"
              value={formData.FIRSTNAME}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="Lastname" className="form-label text-start">Last Name*</label>
            <input
              id="Lastname"
              className="form-control"
              type="text"
              name="LASTNAME"
              placeholder="Enter Last Name"
              value={formData.LASTNAME}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="contactno" className="form-label">Contact Number*</label>
            <input
              id="contactno"
              className="form-control"
              type="tel"
              name="CONTACTNO"
              placeholder="Enter Contact Number"
              value={formData.CONTACTNO}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="Birthday" className="form-label">Birthday*</label>
            <input
              id="Birthday"
              className="form-control"
              type="date"
              name="BIRTHDAY"
              value={formData.BIRTHDAY}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="Email" className="form-label">Email*</label>
            <input
              id="Email"
              className="form-control"
              type="email"
              autoComplete="on"
              name="EMAIL"
              placeholder="Enter Email"
              value={formData.EMAIL}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="courseDropdown" className="form-label">Course*</label>
            <select
              className="form-select"
              name="COURSE"
              id="courseDropdown"
              value={formData.COURSE}
              onChange={handleInputChange}
              required
            >
              <option disabled selected value="">Select a Course</option>
              {courseOptions.map((course, index) => (
                <option key={index} value={course.value}>{course.text}</option>
              ))}
            </select>

          </div>
          <div className="col-md-12 text-end">
          <button className="btn btn-danger " type="submit">Submitt</button>
          </div>
        </form>

    </div>
   {/* Footer */}
   <div className="footer">
        {/* Footer content */}
        <Footer/>

      </div>
    </div>
  );
};

export default ReservationForm;
