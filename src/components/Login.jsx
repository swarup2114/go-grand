
import React from 'react';
import '../stylesComponents/login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
 const url="data:image/jpeg;base64,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"

const Login = () => {
 
    return (
      <div className="login-container">
          <div className="group-data">
              <img className="login-image" src={url} alt="Company Logo" />
              <h3 className="company-name">TELUS</h3>
              <p className="sub-title">tinaa</p>
          </div>
          <form>
              <div className="input-group">
                  <label htmlFor="username">User Name <span className='required'>*</span></label>
                  <input type="text" id="username" required/>
                  <i className="fas fa-user"></i>
              </div>
              <div className="input-group">
                  <label htmlFor="password">Password <span className='required'>*</span></label>
                  <input type="password" id="password" required/>
                  <i className="fas fa-lock"></i>
              </div>
              <button type="submit">Log in with keycloak</button>
          </form>
      </div>
  );
};

export default Login;

