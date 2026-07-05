"use client";

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setMessage('Loggar in...');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setMessage(error.message);
    } else {
      window.location.href = '/dashboard';
    }
  }

  return (
    <main className="authPage">
      <div className="authCard">
        <h1>Logga in</h1>
        <p>Gå till din dashboard.</p>

        <form onSubmit={handleLogin}>
          <label>E-post</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Lösenord</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">Logga in</button>
        </form>

        {message && <p className="message">{message}</p>}
        <p className="muted">Inget konto? <a href="/signup">Skapa konto</a></p>
      </div>
    </main>
  );
}
