import React, { useState } from "react";
import { Coffee, Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password, rememberMe });
  };

  return (
    <div className="login-form">
      <div className="login-header">
        <Coffee className="login-icon" />
        <h2 className="login-title">Welcome Back</h2>
      </div>
      <form onSubmit={handleSubmit} className="login-form-fields">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <div className="input-wrapper">
            <Mail className="input-icon" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-wrapper">
            <Lock className="input-icon" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-btn"
            >
              {showPassword ? (
                <EyeOff className="toggle-icon" />
              ) : (
                <Eye className="toggle-icon" />
              )}
            </button>
          </div>
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="checkbox"
            />
            <label htmlFor="remember-me" className="checkbox-label">
              Remember me
            </label>
          </div>
          <a href="#" className="forgot-password-link">
            Forgot password?
          </a>
        </div>

        <button type="submit" className="submit-btn">
          Sign In
        </button>
        <p className="signup-link">
          Don't have an account?{" "}
          <a href="sign" className="signup-link-text">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
