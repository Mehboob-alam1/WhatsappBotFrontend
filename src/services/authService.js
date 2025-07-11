// src/services/authService.js
import api from '../api/axios';
import { AUTH_ENDPOINTS } from '../api/endpoints';

export const registerUser = async (formData) => {
  try {
    console.log('Registering user with data:', formData);
    
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone || undefined,
    };

    const response = await api.post(AUTH_ENDPOINTS.REGISTER, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Registration response:', response);
    
    const { token, user } = response.data;

    if (token) {
      localStorage.setItem('token', token);
      console.log('Token stored successfully');
    }

    return { success: true, token, user };
  } catch (error) {
    console.error('Registration error:', error);
    
    let message = 'Registration failed. Please try again.';
    
    if (error.response) {
      // Server responded with error status
      message = error.response.data?.message || 
               error.response.data?.error || 
               message;
    } else if (error.request) {
      // Request was made but no response received
      message = `
        Server not responding. Please check:
        1. Your internet connection
        2. CORS settings on the server
        3. API base URL: ${api.defaults.baseURL}
        4. Open browser console for more details
      `;
    }

    return { success: false, message };
  }
};