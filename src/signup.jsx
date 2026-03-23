import { useState } from 'react'
import './App.css'

function SignUp({ onBackToLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = 'Email or phone number is required'
    }
    
    if (formData.email && !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Sign up attempt:', formData)
      // Handle sign up logic here
      alert('Account created successfully!')
    }
  }

  return (
    <div className="shopee-login">
      <section className="login-container">
        {/* Header */}
        <div className="login-header">
          <div className="shopee-logo">
            <span className="logo-icon">🛍️</span>
            <span className="logo-text">Lazapee</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="login-content">
          <h1 className="login-title">Create your account</h1>
          <p className="login-subtitle">Join Lazapee and start shopping</p>

          <form onSubmit={handleSubmit} className="login-form">
            {/* Full Name Input */}
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder=" "
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-field"
                />
                <label htmlFor="fullName" className="input-label">Full Name</label>
              </div>
              {errors.fullName && <div className="error-message">{errors.fullName}</div>}
            </div>

            {/* Email Input */}
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />
                <label htmlFor="email" className="input-label">Email Address</label>
              </div>
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            {/* Phone Input */}
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
                <label htmlFor="phone" className="input-label">Phone Number (Optional)</label>
              </div>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <div className="input-wrapper password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder=" "
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field"
                />
                <label htmlFor="password" className="input-label">Password</label>
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            {/* Confirm Password Input */}
            <div className="input-group">
              <div className="input-wrapper password-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder=" "
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field"
                />
                <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="login-button">Create Account</button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>Or</span>
          </div>

          {/* Social Sign Up */}
          <div className="social-logins">
            <button type="button" className="social-btn google-btn">
              <span className="social-icon">G</span>
              <span>Google</span>
            </button>
            <button type="button" className="social-btn facebook-btn">
              <span className="social-icon">f</span>
              <span>Facebook</span>
            </button>
          </div>

          {/* Back to Login Link */}
          <p className="signup-prompt">
            Already have an account? <button onClick={onBackToLogin} className="signup-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Login</button>
          </p>
        </div>
      </section>
    </div>
  )
}

export default SignUp
