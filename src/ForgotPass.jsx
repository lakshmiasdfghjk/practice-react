import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSendOtpEmail = () => {
    setTimeout(() => {
      setMessage(`An OTP has been sent to ${email}`);
    }, 2000); 
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '500px', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', padding: '20px' }}>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h2 style={{ textAlign: "left", marginBottom: '0px'}}>Reset Password</h2>
              <h3 style={{display: "block", textAlign: "left", marginTop: "0px" }}>
              <span style={{color: '#d6d6cd' }}>Let us help you</span></h3>
              </div>
              <div style={{ position: 'relative', marginBottom: '20px' }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: "calc(100% - 20px)"}}
              />
              <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', color: 'black' }}/>
            </div>
            <button onClick={handleSendOtpEmail} style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', width: '100%' }}>Send OTP Email</button>
            {message && <p style={{ marginTop: '10px' }}>{message}</p>}
            {/* <div style={{ marginTop: '20px' }}>
              <Link to="/">Back to Login</Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
