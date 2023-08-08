import React from 'react'
import background from "../images/background.png"
import googleLogo from "../images/googleLogo.png"
import {Link} from "react-router-dom"


function SignUp() {
  return (
    <>
      <div className="log-in-container">
        <div className="image-part">
            <h1 className="image-part-h1">Organize your workflow, boost your productivity</h1>
            <img src={background} alt="background" className="img-background" />
        </div>
        <div className="form-section">
            <h1 className="brand-logo">Brand Logo</h1>
            <div className="after-brand-logo">
                <button id="signInUp-btn" className="signIn">Sign in</button>
                <button id="signInUp-btn" className="signUp">Sign in</button>
            </div>
            <div className="google-signUp">
                <button className="google-btn">
                    <img src={googleLogo} alt="logo" />
                    Sign up with Google
                </button>
            </div>
            <form className="logIn-form">
                <div className="input">
                    <div className="">
                        <label for="word">Email Address</label>
                        <input type="email" class="form-input" name="email" placeholder="Insert your email" />
                    </div>
                    <div className="">
                        <label for="word">Password</label>
                        <input type="password" className="form-input" name="password" placeholder="Insert your password" />
                    </div>
                    
                </div>
                <div className="keep-me">
                    <input type="checkbox" className="form-input" name="checkbox" />
                    <label for="word" className="keep">Keep me logged in</label>
                    <a href='google.com'>Forgot Password?</a>
                </div>
                <div className="submit-btn">
                  <Link to="/login">
                   <button type="submit" className="btn">
                        Submit
                    </button>
                  </Link>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignUp
