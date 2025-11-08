import React from "react";
import "./App.css";

function App() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5001/auth/google";
  };

  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:5001/auth/facebook";
  };

  return (
    <div className="app-container">
      <h1>Welcome to OAuth2 Login Demo</h1>
      <p>Login using your social account</p>

      <div className="button-container">
        <button className="google-btn" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>

        <button className="facebook-btn" onClick={handleFacebookLogin}>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}

export default App;
