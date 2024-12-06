import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!acceptTerms) {
      alert("You must accept the terms and conditions!");
      return;
    }
    console.log("Sign-Up Details:", formData);
    // Add form submission logic here (e.g., send data to backend)
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <User className="signup-header-icon" />
        <h2 className="signup-header-title">Create Your Account</h2>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <label htmlFor="fullName" className="signup-form-label">
            Full Name
          </label>
          <div className="signup-form-input-container">
            <User className="signup-form-icon" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="signup-form-input"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="signup-form-label">
            Email Address
          </label>
          <div className="signup-form-input-container">
            <Mail className="signup-form-icon" />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="signup-form-input"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="signup-form-label">
            Phone Number
          </label>
          <div className="signup-form-input-container">
            <Phone className="signup-form-icon" />
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="signup-form-input"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="signup-form-label">
            Password
          </label>
          <div className="signup-form-input-container">
            <Lock className="signup-form-icon" />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="signup-form-input"
              placeholder="Create a password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="signup-form-password-toggle"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="signup-form-label">
            Confirm Password
          </label>
          <div className="signup-form-input-container">
            <Lock className="signup-form-icon" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              className="signup-form-input"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="signup-form-password-toggle"
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <div className="signup-terms-container">
          <input
            id="terms"
            type="checkbox"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
            className="signup-terms-checkbox"
            required
          />
          <label htmlFor="terms" className="signup-terms-label">
            I accept the{" "}
            <a href="#" className="signup-terms-link">
              Terms and Conditions
            </a>
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
