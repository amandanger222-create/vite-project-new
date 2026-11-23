import { useState } from 'react';

function Login() {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let isError = false;
    setIsError(false);
    if (email == '') {
      setMessage('Please enter your email address.');
      setIsError(true);
      return;
    }

    if (password == '') {
      setMessage('Please enter your password.');
      setIsError(true);
      return;
    }

    if(!isError){
        setMessage('Login successful.');
    }

   
  }

  return (
    <section className="login-section" id="login">
      <div className="login-card">
        <h2>Welcome back</h2>
        <p className="login-intro">Log in to your AstraFlow account.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>
          {email && <p className="field-preview">You entered: {email}</p>}
          <input
            id="login-email"
            name="email"
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            
          
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            
          />

          <button className="button login-button" type="submit">Log in</button>
          {message && <p className={ isError ? "error-message" : "login-message"} role="status">{message}</p>}
          <p className="auth-switch">
            New to AstraFlow? <a href="#signup">Create an account</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
