// import { useState } from 'react';
// import './SignUp.css';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import Navbar from '../../components/Header';
// import Footer from '../../components/Footer';
// import { registerUser } from '../../services/authService';


// export default function SignUp({ onNavigate }) {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     agreeToTerms: false,
//   });

//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [touched, setTouched] = useState({
//     name: false,
//     email: false,
//     password: false,
//     agreeToTerms: false,
//   });

//   const { signup } = useAuth();

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.name.trim()) {
//       errors.name = 'Full name is required';
//     }

//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = 'Please enter a valid email';
//     }

//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters';
//     }

//     if (!formData.agreeToTerms) {
//       errors.agreeToTerms = 'You must agree to the terms';
//     }

//     return errors;
//   };

//   const errors = validateForm();
//   const isFormValid = Object.keys(errors).length === 0;

//   const updateFormData = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setTouched((prev) => ({ ...prev, [field]: true }));

//     if (field === 'password') {
//       const strength = Math.min(Math.floor((value.length / 8) * 4), 4);
//       setPasswordStrength(strength);
//     }
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError('');

//   if (!isFormValid) {
//     setTouched({
//       name: true,
//       email: true,
//       password: true,
//       agreeToTerms: true,
//     });
//     return;
//   }

//   setIsLoading(true);

//   const result = await registerUser(formData);

//   if (result.success) {
//     navigate('/dashboard'); // Adjust route as needed
//   } else {
//     setError(result.message);
//   }

//   setIsLoading(false);
// };

//   return (
//     <main className="main-content">
//       <Navbar />
//       <div className="signup-container">
//         <div className="back-link">
//           <button
//             onClick={() => navigate('/auth')}
//             className="link-button"
//             disabled={isLoading}
//           >
//             <svg className="back-icon" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
//               />
//             </svg>
//             Back to login
//           </button>
//         </div>

//         <div className="signup-header">
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d05874800d6e1ac09489ded0541136e98e9607f5?width=484"
//             alt="Bestbot"
//             className="signup-logo"
//           />
//           <h1 className="signup-title">Create your account</h1>
//           <p className="signup-subtitle">
//             Join bestbot to manage your projects and tasks efficiently
//           </p>
//         </div>

//         {error && <div className="error-message">{error}</div>}

//         <div className="social-buttons">
//           <button
//             className="social-button google-button"
//             type="button"
//             disabled={isLoading}
//           >
//             <svg className="social-icon" viewBox="0 0 24 24">
//               <path
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 fill="#4285F4"
//               />
//               <path
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 fill="#34A853"
//               />
//               <path
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 fill="#FBBC05"
//               />
//               <path
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 fill="#EA4335"
//               />
//             </svg>
//             Sign up with Google
//           </button>
//         </div>

//         <div className="divider-container">
//           <div className="divider-line"></div>
//           <span className="divider-text">or sign up with email</span>
//         </div>

//         <form className="signup-form" onSubmit={handleSubmit} noValidate>
//           <div className="form-group">
//             <label htmlFor="fullName" className="form-label">
//               Full Name
//             </label>
//             <input
//               id="fullName"
//               type="text"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={(e) => updateFormData('name', e.target.value)}
//               className={`form-input ${
//                 touched.name && errors.name ? 'input-error' : ''
//               }`}
//               disabled={isLoading}
//             />
//             {touched.name && errors.name && (
//               <div className="error-text">{errors.name}</div>
//             )}
//           </div>

//           <div className="form-group">
//             <label htmlFor="email" className="form-label">
//               Work Email
//             </label>
//             <div className="input-container">
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="you@company.com"
//                 value={formData.email}
//                 onChange={(e) => updateFormData('email', e.target.value)}
//                 className={`form-input ${
//                   touched.email && errors.email ? 'input-error' : ''
//                 }`}
//                 disabled={isLoading}
//               />
//               {formData.email && (
//                 <button
//                   type="button"
//                   className="input-clear-button"
//                   onClick={() => updateFormData('email', '')}
//                   disabled={isLoading}
//                 >
//                   <svg className="clear-icon" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               )}
//             </div>
//             {touched.email && errors.email && (
//               <div className="error-text">{errors.email}</div>
//             )}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <div className="input-container">
//               <input
//                 id="password"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Create a strong password"
//                 value={formData.password}
//                 onChange={(e) => updateFormData('password', e.target.value)}
//                 className={`form-input ${
//                   touched.password && errors.password ? 'input-error' : ''
//                 }`}
//                 disabled={isLoading}
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={() => setShowPassword(!showPassword)}
//                 disabled={isLoading}
//               >
//                 {showPassword ? (
//                   <svg className="eye-icon" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
//                     />
//                   </svg>
//                 ) : (
//                   <svg className="eye-icon" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>

//             {touched.password && errors.password && (
//               <div className="error-text">{errors.password}</div>
//             )}

//             {formData.password && (
//               <div className="password-strength">
//                 <div className="strength-meter">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div
//                       key={i}
//                       className={`strength-bar ${
//                         i <= passwordStrength ? 'strong' : ''
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <p className="strength-hint">
//                   Use 8+ characters with a mix of letters, numbers & symbols
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="form-group">
//             <label htmlFor="companyName" className="form-label">
//               Phone Number (Optional)
//             </label>
//             <input
//               id="companyName"
//               type="phone"
//               placeholder="Enter your Phone number"
//               value={formData.phone}
//               onChange={(e) => updateFormData('phone', e.target.value)}
//               className="form-input"
//               disabled={isLoading}
//             />
//           </div>

//           <div className="terms-container">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={formData.agreeToTerms}
//               onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
//               className="terms-checkbox"
//               disabled={isLoading}
//             />
//             <label htmlFor="terms" className="terms-label">
//               I agree to TaskFlow's{' '}
//               <a href="#" className="terms-link">
//                 Terms of Service
//               </a>{' '}
//               and{' '}
//               <a href="#" className="terms-link">
//                 Privacy Policy
//               </a>
//             </label>
//             {touched.agreeToTerms && errors.agreeToTerms && (
//               <div className="error-text">{errors.agreeToTerms}</div>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="submit-button"
//             disabled={!isFormValid || isLoading}
//           >
//             {isLoading ? 'Creating Account...' : 'Create Account'}
//           </button>
//         </form>

//         <div className="login-link">
//           <span className="login-text">Already have an account? </span>
//           <button
//             onClick={onNavigate}
//             className="login-action"
//             disabled={isLoading}
//           >
//             Log in
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }
import { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';
import { registerUser } from '../../services/authService';

export default function SignUp({ onNavigate }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    agreeToTerms: false,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    agreeToTerms: false,
  });

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (!formData.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms';
    }

    return errors;
  };

  const errors = validateForm();
  const isFormValid = Object.keys(errors).length === 0;

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));

    if (field === 'password') {
      const strength = Math.min(Math.floor((value.length / 8) * 4), 4);
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isFormValid) {
      setTouched({
        name: true,
        email: true,
        password: true,
        agreeToTerms: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await registerUser(formData);

      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main-content">
      <Navbar />
      <div className="signup-container">
        <div className="back-link">
          <button
            onClick={() => navigate('/auth')}
            className="link-button"
            disabled={isLoading}
          >
            <svg className="back-icon" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to login
          </button>
        </div>

        <div className="signup-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d05874800d6e1ac09489ded0541136e98e9607f5?width=484"
            alt="Bestbot"
            className="signup-logo"
          />
          <h1 className="signup-title">Create your account</h1>
          <p className="signup-subtitle">
            Join bestbot to manage your projects and tasks efficiently
          </p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="social-buttons">
          <button
            className="social-button google-button"
            type="button"
            disabled={isLoading}
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
            Sign up with Google
          </button>
        </div>

        <div className="divider-container">
          <div className="divider-line"></div>
          <span className="divider-text">or sign up with email</span>
        </div>

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              className={`form-input ${
                touched.name && errors.name ? 'input-error' : ''
              }`}
              disabled={isLoading}
              required
            />
            {touched.name && errors.name && (
              <div className="error-text">{errors.name}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-container">
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className={`form-input ${
                  touched.email && errors.email ? 'input-error' : ''
                }`}
                disabled={isLoading}
                required
              />
              {formData.email && (
                <button
                  type="button"
                  className="input-clear-button"
                  onClick={() => updateFormData('email', '')}
                  disabled={isLoading}
                >
                  <svg className="clear-icon" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            {touched.email && errors.email && (
              <div className="error-text">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-container">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => updateFormData('password', e.target.value)}
                className={`form-input ${
                  touched.password && errors.password ? 'input-error' : ''
                }`}
                disabled={isLoading}
                required
                minLength="8"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <svg className="eye-icon" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg className="eye-icon" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {touched.password && errors.password && (
              <div className="error-text">{errors.password}</div>
            )}

            {formData.password && (
              <div className="password-strength">
                <div className="strength-meter">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`strength-bar ${
                        i <= passwordStrength ? 'strong' : ''
                      }`}
                    />
                  ))}
                </div>
                <p className="strength-hint">
                  Use 8+ characters with a mix of letters, numbers & symbols
                </p>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number (Optional)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your Phone number"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              className="form-input"
              disabled={isLoading}
            />
          </div>

          <div className="terms-container">
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
              className="terms-checkbox"
              disabled={isLoading}
              required
            />
            <label htmlFor="terms" className="terms-label">
              I agree to TaskFlow's{' '}
              <a href="#" className="terms-link">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="terms-link">
                Privacy Policy
              </a>
            </label>
            {touched.agreeToTerms && errors.agreeToTerms && (
              <div className="error-text">{errors.agreeToTerms}</div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="login-link">
          <span className="login-text">Already have an account? </span>
          <button
            onClick={() => navigate('/login')}
            className="login-action"
            disabled={isLoading}
          >
            Log in
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}