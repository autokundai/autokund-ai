"use client";

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSignup(e) {
    e.preventDefault();
    setMessage('Skapar konto...');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin + '/login'
      }
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Konto skapat. Kolla din e-post och bekräfta kontot.');
    }
  }

  return (
    <main className="authPage">
      <div className="authCard">
        <h1>Skapa konto</h1>
        <p>Starta ditt AutoKund AI-konto.</p>

        <form onSubmit={handleSignup}>
          <label>E-post</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Lösenord</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="6" />

          <button type="submit">Skapa konto</button>
        </form>

        {message && <p className="message">{message}</p>}
        <p className="muted">Har du redan konto? <a href="/login">Logga in</a></p>
      </div>
    </main>
  );
}
