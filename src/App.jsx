import { useState } from 'react'
import './App.css'
import SignUp from './signup'

function App() {
  const [currentPage, setCurrentPage] = useState('login') // 'login' or 'signup'
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { phone, password })
  }

  // Render Sign Up page if currentPage is 'signup'
  if (currentPage === 'signup') {
    return <SignUp onBackToLogin={() => setCurrentPage('login')} />
  }

  // Default: Render Login page
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
          <h1 className="login-title">Login to your account</h1>
          <p className="login-subtitle">or create a new account</p>

          <form onSubmit={handleSubmit} className="login-form">
            {/* Phone/Email Input */}
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="phone"
                  placeholder=" "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field"
                />
                <label htmlFor="phone" className="input-label">Phone Number or Email</label>
              </div>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <div className="input-wrapper password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>

            {/* Forgot Password Link */}
            <a href="#" className="forgot-password">Forgot password?</a>

            {/* Login Button */}
            <button type="submit" className="login-button">Login</button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>Or</span>
          </div>

          {/* Social Login */}
          <div className="social-logins">
            <button className="social-btn google-btn">
              <span className="social-icon">G</span>
              <span>Google</span>
            </button>
            <button className="social-btn facebook-btn">
              <span className="social-icon">f</span>
              <span>Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="signup-prompt">
            Don't have an account? <button onClick={() => setCurrentPage('signup')} className="signup-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Sign up</button>
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
