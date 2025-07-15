import React, { useState } from 'react';
import { useAuthStore } from '../../Store/useAuthStore';
import './Login.css';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(formData);
      if (success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      // You might want to show a toast notification here
    }
  };


  return (
    <>
      <div className="app-container">
        {/* <Navbar /> */}
        <main className="main-content">
          <div className="login-card">

            <div className="login-header">
              <div className="login-logo">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d05874800d6e1ac09489ded0541136e98e9607f5?width=484"
                  alt="Bestbot"
                  className="signup-logo"
                />
              </div>
              <h2>Welcome to bestbot</h2>
              <p>Sign in to continue to dashboard</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="form-input"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />

              </div>

              <button
                type="submit"
                className="continue-button"

              >
                {'Continue'}
              </button>
            </form>

            <div className="divider">
              <span>or</span>
            </div>

            <div className="social-login">
              <button
                className="social-button google-button"
                type="button"
              >
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>

            <div className="signup-link">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('signup')}
                className="link-button"
              >
                Get started
              </button>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
