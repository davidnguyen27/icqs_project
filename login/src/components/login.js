import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    
    <div className="login">
      <div className="card-box">
        <div className="infor">
          <h1>Login</h1>
          <h3>Welcome to my website</h3>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <h2>Login Website</h2>
              <div className="data">
                <label>
                  <h3>Email account</h3>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </label>
                <label>
                  <h3>Password</h3>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </label>
              </div>
              <div className="recover">
                <div>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
              </div>
              
            </div>
            <div className="button">
              <button type="submit">Login</button>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
