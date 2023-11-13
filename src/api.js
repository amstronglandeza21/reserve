// api.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://script.google.com/macros/s/AKfycbzCna4DAZb7lMUvwfEwubHnC4UwoRc5qDf0kbx046KTFvZte6d7ogqsdsxao-4HQ-6O/exec',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include this if you need to send cookies from the client
});

export const fetchData = async () => {
  try {
    const response = await axiosInstance.post('/endpoint', data);

    // Process the response...
  } catch (error) {
    // Handle errors...
  }
};
