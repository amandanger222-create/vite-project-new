import { useState } from 'react';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsError(false);

    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setMessage('Please complete all fields.');
      setIsError(true);
      return;
    }

    if (!email.includes('@')) {
      setMessage('Please enter a valid email address.');
      setIsError(true);
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      setIsError(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setIsError(true);
      return;
    }

    setMessage('Registration successful.');
  }

  return (
    <section className="login-section" id="signup">
      <div className="login-card signup-card">
        <h2>Create account</h2>
        <p className="login-intro">Join AstraFlow and start managing your trade account.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Full name</label>
          <input
            id="signup-name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            autoComplete="name"
          />

          <label htmlFor="signup-email">Email address</label>
          {email && <p className="field-preview">You entered: {email}</p>}
          <input
            id="signup-email"
            name="email"
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
          />

          <label htmlFor="signup-confirm-password">Confirm password</label>
          <input
            id="signup-confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="new-password"
          />

          <button className="button login-button" type="submit">Sign up</button>
          {message && (
            <p className={isError ? 'error-message' : 'login-message'} role="status">
              {message}
            </p>
          )}
          <p className="auth-switch">
            Already have an account? <a href="#login">Log in</a>
          </p>
        </form>

        <aside className="signup-note" aria-label="Registration note">
          <strong>Registration note</strong>
          <p>This form checks required fields, email format, password length, and matching passwords. It currently runs only in the browser and does not save account details or send notifications.</p>
        </aside>
      </div>
    </section>
  );
}

export default Signup;
