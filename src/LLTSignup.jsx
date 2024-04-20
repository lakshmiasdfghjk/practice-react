import React, {useState} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash, faCircleUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword); 
    };

    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
  };
  
    const handleSignup = async () => {
      try {
        const response = await axios.post('your_api_endpoint/signup', {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        });
        console.log(response.data); // Assuming API returns user data
      } catch (error) {
        setError(error.response.data.message);
      }
    };

  
  return (
    <div>
      <div style={{ marginBottom: '20px', textAlign: 'left', marginTop: "0px" }}>
            <h2 style={{ textAlign: "left", marginBottom: '0px'}}>Sign Up</h2>
            <h4 style={{display: "block", textAlign: "left", marginTop: "0px" }}>
            <span style={{color: 'lightgray' }}>Enter details to create your account</span>
            </h4>
        </div>
        <div style={{ marginBottom: '20px' }}>
      <div style={{ position: 'relative', marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc',width: "95%" }}
      />
      <FontAwesomeIcon icon={faCircleUser} style={{ position: 'absolute', top: '40%', right: '10px', transform: 'translateY(-50%)', color: 'black' }} />
      </div>
      <div style={{ position: 'relative', marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: "95%" }}
      />
      <FontAwesomeIcon icon={faCircleUser} style={{ position: 'absolute', top: '40%', right: '10px', transform: 'translateY(-50%)', color: 'black' }} />
      </div>
      <div style={{ position: 'relative', marginBottom: '10px' }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc',width: "95%" }}
      />
      <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', top: '40%', right: '10px', transform: 'translateY(-50%)', color: 'black' }}/>
      </div>
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: "95%" }}
        />
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} style={{ position: 'absolute', top: '40%', right: '10px', transform: 'translateY(-50%)', color: 'black', cursor: 'pointer' }} />
        </div>
        <div style={{ position: 'relative', marginBottom: '10px' }}>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc',width: "95%" }}
          />
          <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} onClick={toggleConfirmPasswordVisibility} style={{ position: 'absolute', top: '40%', right: '10px', transform: 'translateY(-50%)', color: 'black', cursor: 'pointer' }} />
        </div>
      <button onClick={handleSignup} style={{ width: '100%', marginBottom: '5px', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Send Email OTP</button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
    </div>
  );
};

export default SignupPage;

