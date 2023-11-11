import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    FIRSTNAME: '',
    LASTNAME: '',
    CONTACTNO: '',
    BIRTHDAY: '',
    EMAIL: '',
    COURSE: '',
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses on component mount
    fetchCourseData();
  }, []);

  const fetchCourseData = () => {
    // Fetch course data from the API
    fetch('https://script.google.com/macros/s/AKfycbzCna4DAZb7lMUvwfEwubHnC4UwoRc5qDf0kbx046KTFvZte6d7ogqsdsxao-4HQ-6O/exec')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleInputChange = (e) => {
    // Update form data on input change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    // Email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.EMAIL)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Perform form submission
    fetch('https://script.google.com/macros/s/AKfycbzCna4DAZb7lMUvwfEwubHnC4UwoRc5qDf0kbx046KTFvZte6d7ogqsdsxao-4HQ-6O/exec', {
      method: 'POST',
      body: new URLSearchParams(formData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => {
        alert('Thank you! Your form is submitted successfully.');
        // Reset form data
        setFormData({
          FIRSTNAME: '',
          LASTNAME: '',
          CONTACTNO: '',
          BIRTHDAY: '',
          EMAIL: '',
          COURSE: '',
        });
        // Optionally: Fetch updated course data
        fetchCourseData();
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    
    <div className="container" id="content-container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="Firstname" className="form-label">
            First Name*
          </label>
          <input
            id="Firstname"
            className="form-control"
            type="text"
            name="FIRSTNAME"
            value={formData.FIRSTNAME}
            placeholder="Enter First Name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Lastname" className="form-label">
            Last Name*
          </label>
          <input
            id="Lastname"
            className="form-control"
            type="text"
            name="LASTNAME"
            value={formData.LASTNAME}
            placeholder="Enter Last Name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="contactno" className="form-label">
            Contact Number*
          </label>
          <input
            id="contactno"
            className="form-control"
            type="tel"
            name="CONTACTNO"
            value={formData.CONTACTNO}
            placeholder="Enter Contact Number"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Birthday" className="form-label">
            Birthday*
          </label>
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
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email*
          </label>
          <input
            id="Email"
            className="form-control"
            type="email"
            name="EMAIL"
            value={formData.EMAIL}
            autoComplete="off"
            placeholder="Enter Email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseDropdown" className="form-label">
            Course*
          </label>
          <select
            className="form-select"
            name="COURSE"
            id="courseDropdown"
            value={formData.COURSE}
            onChange={handleInputChange}
            required
          >
            <option disabled value="">
              Select a Course
            </option>
            {courses.map((course) => (
              <option key={course.course} value={course.course}>
                {course.course}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-danger" type="submit">
          Submit
        </button>
      </form>
    
      
    </div>
  );
};

export default ReservationForm;
