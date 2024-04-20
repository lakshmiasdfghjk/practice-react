import React, { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import image from './MUI/Boy.jpg';
import SignupPage from './LLTSignup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import ForgotPassword from './ForgotPass';



const LltLogin = () => {
  const [phoneNumberOrEmail, setphoneNumberOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
 

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };


  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://lltapp.net/api/v1/auth/login', {
        phoneNumberOrEmail,
        password,
      });
      console.log(response.data); 
    } catch (error) {


      
      setError(error.response.data.message);
    }
  };


  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '700px',height: "500px", border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', display: 'flex', position: "relative" }}>
        <div style={{ flex: '1', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="image-container" style={{height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
             <img src={image} alt="Your" style={{ Height: '100%', maxWidth: '115%', borderRadius: "8%"}} /> 
          </div>
        </div>
        <div style={{ flex: '1', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '20px', textAlign: 'left', marginTop: "0px" }}>
            <h2 style={{ textAlign: "left", marginBottom: '0px'}}>Welcome to LLT Overseas</h2>
            <h4 style={{display: "block", textAlign: "left", marginTop: "0px" }}>
            <span style={{color: '#d6d6cd' }}>Need an account?</span>
            <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }} onClick={toggleSignUpForm}> Sign Up</span>
            {showSignUpForm && <SignupPage />}
            </h4>
          </div>
        <h3 style={{display: "block", textAlign: "left", marginTop: "0px" }}>Sign in</h3>
        <div style={{ position: 'relative', marginBottom: '10px' }}>
            <input
              type="phoneNumberOrEmail"
              placeholder="Email"
              value={phoneNumberOrEmail}
              onChange={(e) => setphoneNumberOrEmail(e.target.value)}
              style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '95%', position: 'relative' }}
            />
              <FontAwesomeIcon icon={faCircleUser} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', color: 'black' }} />
        </div>
        <div style={{ position: 'relative', marginBottom: '10px' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc',width: "95%", position: "relative" }}
            />
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} style={{ position: 'absolute', top: '40%', right: '10px', transform: 'translateY(-50%)', color: 'black', cursor: 'pointer' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={handleRememberMeChange} 
              style={{ width: "20px", height: "20px",marginRight: '5px' }} />
              <label htmlFor="rememberMe" style={{ color: '#999',fontSize: '14px' }}>Remember Me</label>
              <span style={{ fontSize: '14px', marginLeft: "auto", cursor: 'pointer' }} onClick={toggleForgotPassword}>Forgot Password?</span>
            </div>
            {showForgotPassword && <ForgotPassword />}
            
          <button onClick={handleLogin} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>Login</button>
          <div style={{ display: 'flex', justifyContent: 'center', margin: "20px",fontSize: "14px", color: "gray" }}>
              <hr style={{ width: '50%', margin: '10px 10px 10px 0', border: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.2)' }} />
              OR
              <hr style={{ width: '50%', margin: '10px 0 10px 10px', border: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.2)' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{justifyContent: "center",display: "flex",alignItems: "center", border: '1px solid #ccc',borderRadius: '5px',width: '30px',height: '30px',backgroundColor: "#d6d6cd",cursor: 'pointer',marginRight: '10px'}}>
          <FontAwesomeIcon icon={faGooglePlusG}  style={{ fontSize: '20px'}}/>
          </div>
            <div style={{justifyContent: "center",display: "flex",alignItems: "center", border: '1px solid #ccc',borderRadius: '5px',width: '30px',height: '30px',backgroundColor: "#d6d6cd",cursor: 'pointer',marginRight: '10px'}}>
          <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '20px'}}/>
          
          </div>
          <div style={{justifyContent: "center",display: "flex",alignItems: "center", border: '1px solid #ccc',borderRadius: '5px',width: '30px',height: '30px',backgroundColor: "#d6d6cd",cursor: 'pointer',marginRight: '10px'}}>
          
          <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '20px'}}/>
          </div>
          <div style={{justifyContent: "center",display: "flex",alignItems: "center", border: '1px solid #ccc',borderRadius: '5px',width: '30px',height: '30px',backgroundColor : "lightgrey",cursor: 'pointer'}}
          >
          
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '20px'}}/>
          </div>
          </div>
          
          {error && <p className="error-message" style={{ marginTop: '10px', color: 'red' }}>{error}</p>}
          
        </div>
      </div>
    </div>
  );
};

export default LltLogin;