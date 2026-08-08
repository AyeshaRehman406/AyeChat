import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </svg>
  );
}

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSignupRoute = location.pathname === ROUTES.SIGNUP;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleModeSwitch = (targetRoute) => {
    setError('');
    setInfoMessage('');
    setSuccessMessage('');
    navigate(targetRoute);
  };

  const handleForgotPassword = () => {
    setError('');
    setSuccessMessage('');
    setInfoMessage('Password recovery request registered. Instructions will be sent once recovery services are active.');
  };

  const validateForm = () => {
    if (isSignupRoute && !fullName.trim()) {
      return 'Please enter your full name.';
    }

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      return 'Email address is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return 'Please enter a valid email address.';
    }

    if (!password) {
      return 'Password is required.';
    }

    if (isSignupRoute) {
      if (password.length < 6) {
        return 'Password must be at least 6 characters long.';
      }
      if (!confirmPassword) {
        return 'Please confirm your password.';
      }
      if (password !== confirmPassword) {
        return 'Passwords do not match.';
      }
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setInfoMessage('');
    setSuccessMessage('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const successText = isSignupRoute
        ? 'Account created successfully! Redirecting to workspace...'
        : 'Credentials validated successfully! Redirecting to workspace...';
      setSuccessMessage(successText);
      setTimeout(() => {
        navigate(ROUTES.DASHBOARD);
      }, 1000);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="ayechat-auth-page">
      <div className="ayechat-auth-container">
        <section className="ayechat-auth-branding">
          <div className="ayechat-auth-brand-header">
            <div className="ayechat-auth-brand-icon" aria-hidden="true">
              <BrandIcon />
            </div>
            <span className="ayechat-auth-brand-name">AyeChat</span>
          </div>
          <h1 className="ayechat-auth-branding-title">
            {isSignupRoute ? 'Join the AyeChat Community' : 'Welcome back to AyeChat'}
          </h1>
          <p className="ayechat-auth-branding-description">
            {isSignupRoute
              ? 'Create an account to start real-time messaging, audio calls, video meetings, and group collaboration.'
              : 'Sign in to securely access your ongoing conversations, call logs, and group workspaces.'}
          </p>
        </section>

        <section className="ayechat-auth-card" aria-labelledby="ayechat-auth-heading">
          <div className="ayechat-auth-card-header">
            <h2 id="ayechat-auth-heading" className="ayechat-auth-title">
              {isSignupRoute ? 'Create your account' : 'Sign in to AyeChat'}
            </h2>
            <p className="ayechat-auth-subtitle">
              {isSignupRoute
                ? 'Fill in your details to set up your workspace profile.'
                : 'Enter your credentials to access your account.'}
            </p>
          </div>

          {error && (
            <div id="ayechat-auth-error" className="ayechat-auth-alert ayechat-auth-alert-error" role="alert">
              {error}
            </div>
          )}

          {infoMessage && (
            <div id="ayechat-auth-info" className="ayechat-auth-alert ayechat-auth-alert-info" role="status">
              {infoMessage}
            </div>
          )}

          {successMessage && (
            <div id="ayechat-auth-success" className="ayechat-auth-alert ayechat-auth-alert-success" role="status">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="ayechat-auth-form" noValidate>
            {isSignupRoute && (
              <div className="ayechat-auth-field">
                <label htmlFor="ayechat-signup-fullname" className="ayechat-auth-label">
                  Full name
                </label>
                <input
                  id="ayechat-signup-fullname"
                  type="text"
                  className="ayechat-auth-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                />
              </div>
            )}

            <div className="ayechat-auth-field">
              <label htmlFor="ayechat-auth-email" className="ayechat-auth-label">
                Email address
              </label>
              <input
                id="ayechat-auth-email"
                type="email"
                className="ayechat-auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                disabled={isSubmitting}
                aria-invalid={Boolean(error && error.toLowerCase().includes('email'))}
                aria-describedby={error ? 'ayechat-auth-error' : undefined}
              />
            </div>

            <div className="ayechat-auth-field">
              <div className="ayechat-auth-label-row">
                <label htmlFor="ayechat-auth-password" className="ayechat-auth-label">
                  Password
                </label>
                {!isSignupRoute && (
                  <button
                    type="button"
                    className="ayechat-auth-forgot-btn"
                    onClick={handleForgotPassword}
                    disabled={isSubmitting}
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="ayechat-auth-input-wrapper">
                <input
                  id="ayechat-auth-password"
                  type={showPassword ? 'text' : 'password'}
                  className="ayechat-auth-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={isSignupRoute ? 'new-password' : 'current-password'}
                  required
                  disabled={isSubmitting}
                  aria-invalid={Boolean(error && error.toLowerCase().includes('password'))}
                  aria-describedby={error ? 'ayechat-auth-error' : undefined}
                />
                <button
                  type="button"
                  className="ayechat-auth-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  disabled={isSubmitting}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {isSignupRoute && (
              <div className="ayechat-auth-field">
                <label htmlFor="ayechat-signup-confirm-password" className="ayechat-auth-label">
                  Confirm password
                </label>
                <div className="ayechat-auth-input-wrapper">
                  <input
                    id="ayechat-signup-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="ayechat-auth-input"
                    value={confirmPassword}
                    onChange={(e) => setShowConfirmPassword(!showConfirmPassword)}
                    autoComplete="new-password"
                    required
                    disabled={isSubmitting}
                    aria-invalid={Boolean(error && error.toLowerCase().includes('match'))}
                    aria-describedby={error ? 'ayechat-auth-error' : undefined}
                  />
                  <button
                    type="button"
                    className="ayechat-auth-toggle-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                    disabled={isSubmitting}
                  >
                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="ayechat-auth-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? (isSignupRoute ? 'Creating account...' : 'Signing in...')
                : (isSignupRoute ? 'Create Account' : 'Sign In')}
            </button>
          </form>

          <div className="ayechat-auth-footer">
            <p className="ayechat-auth-switch-text">
              {isSignupRoute ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                className="ayechat-auth-switch-btn"
                onClick={() => handleModeSwitch(isSignupRoute ? ROUTES.LOGIN : ROUTES.SIGNUP)}
                disabled={isSubmitting}
              >
                {isSignupRoute ? 'Sign in' : 'Create account'}
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}