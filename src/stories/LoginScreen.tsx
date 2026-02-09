import React, { useState } from 'react';

import { Button } from './Button';
import { TextField } from './TextField';
import { Link } from './Link';

import './login-screen.css';

export interface LoginScreenProps {
  /** App or logo area (e.g. logo image, app name) */
  header?: React.ReactNode;
  /** Title above the form */
  title?: string;
  /** Subtitle or welcome text */
  subtitle?: string;
  /** Forgot password link href */
  forgotPasswordHref?: string;
  /** Sign up link href */
  signUpHref?: string;
  /** Called when form is submitted with email and password */
  onSubmit?: (email: string, password: string) => void;
  /** Optional client-side validation error */
  submitError?: string;
}

/** Mobile-first login screen using design tokens */
export const LoginScreen = ({
  header,
  title = 'Log in',
  subtitle,
  forgotPasswordHref = '#',
  signUpHref = '#',
  onSubmit,
  submitError,
}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [fieldError, setFieldError] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; password?: string } = {};
    if (!email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email';
    if (!password) errors.password = 'Password is required';
    setFieldError(errors);

    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    onSubmit?.(email, password);
    setLoading(false);
  };

  return (
    <div className="tipico-login-screen">
      <div className="tipico-login-screen__inner">
        {header && (
          <header className="tipico-login-screen__header">
            {header}
          </header>
        )}

        <div className="tipico-login-screen__content">
          <h1 className="tipico-login-screen__title">{title}</h1>
          {subtitle && (
            <p className="tipico-login-screen__subtitle">{subtitle}</p>
          )}

          <form
            className="tipico-login-screen__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (fieldError.email) setFieldError((prev) => ({ ...prev, email: undefined }));
              }}
              error={fieldError.email}
              autoComplete="email"
              autoCapitalize="off"
            />

            <TextField
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (fieldError.password) setFieldError((prev) => ({ ...prev, password: undefined }));
              }}
              error={fieldError.password}
              autoComplete="current-password"
            />

            {forgotPasswordHref && (
              <div className="tipico-login-screen__forgot">
                <Link href={forgotPasswordHref}>Forgot password?</Link>
              </div>
            )}

            {submitError && (
              <p className="tipico-login-screen__submit-error" role="alert">
                {submitError}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="large"
              disabled={loading}
              className="tipico-login-screen__submit"
            >
              {loading ? 'Logging in…' : 'Log in'}
            </Button>
          </form>

          {signUpHref && (
            <p className="tipico-login-screen__signup">
              Don’t have an account?{' '}
              <Link href={signUpHref}>Sign up</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
