import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="social-logins">
            <button className="google">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22Logo.svg/1200px-Google_%22Logo.svg.png" alt="Google logo" />
              Login with Google
            </button>
            <button className="facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook logo" />
              Login with Facebook
            </button>
          </div>
        </div>
      </section>
     )
 </>
  )}
export default App
