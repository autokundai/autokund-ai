"use client";

import AIReceptionist from '../../components/AIReceptionist';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState({
    name: 'Din Salong',
    services: 'Klippning, färgning, styling',
    hours: 'Mån–fre 09:00–18:00',
    phone: '070-000 00 00',
    email: 'kontakt@dinsalong.se',
    booking: 'https://example.com/boka'
  });

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
  window.location.href = '/login';
} else {
  setUser(data.user);

  const { data: companyData, error } = await supabase
    .from("companies")
    .select("*")
    .eq("user_id", data.user.id)
    .single();

  if (companyData && !error) {
    setCompany({
      name: companyData.company_name || "",
      services: companyData.services || "",
      hours: companyData.opening_hours || "",
      phone: companyData.phone || "",
      email: companyData.email || "",
      booking: companyData.booking_url || ""
    });
  }
}
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/login';
  }

  function updateCompany(field, value) {
    setCompany({ ...company, [field]: value });
  }

  async function saveCompany() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    alert("Du är inte inloggad.");
    return;
  }

  const { error } = await supabase
    .from("companies")
    .upsert(
      {
        user_id: user.id,
        company_name: company.name,
        services: company.services,
        opening_hours: company.hours,
        phone: company.phone,
        email: company.email,
        booking_url: company.booking
      },
      { onConflict: "user_id" }
    );

  if (error) {
    alert(error.message);
  } else {
    alert("Företagsinformationen sparades!");
  }
}

  if (!user) {
    return <main className="loading">Laddar dashboard...</main>;
  }

  return (
    <main className="dashboard">
      <aside className="sidebar">
        <h2>AutoKund AI</h2>
        <a>Dashboard</a>
        <a>Företagsinfo</a>
        <a>Chatbot</a>
        <a>Installation</a>
        <button className="logout" onClick={handleLogout}>Logga ut</button>
      </aside>

      <section className="dashContent">
        <h1>Dashboard</h1>
        <p className="muted">Inloggad som {user.email}</p>

        <div className="dashGrid">
          <div className="panel">
            <h2>Företagsinfo</h2>

            <label>Företagsnamn</label>
            <input value={company.name} onChange={(e) => updateCompany('name', e.target.value)} />

            <label>Tjänster</label>
            <textarea value={company.services} onChange={(e) => updateCompany('services', e.target.value)} />

            <label>Öppettider</label>
            <input value={company.hours} onChange={(e) => updateCompany('hours', e.target.value)} />

            <label>Telefon</label>
            <input value={company.phone} onChange={(e) => updateCompany('phone', e.target.value)} />

            <label>E-post</label>
            <input value={company.email} onChange={(e) => updateCompany('email', e.target.value)} />

            <label>Bokningslänk</label>
            <input value={company.booking} onChange={(e) => updateCompany('booking', e.target.value)} />

            <button onClick={saveCompany}>
              Spara ändringar
            </button>

            <p className="muted">Spara-knappen kopplas till databasen i nästa steg.</p>
          </div>

          <div className="panel">
            <h2>Chatbot-preview</h2>
            <div className="miniChat">
              <div className="miniHeader">{company.name}</div>
              <div className="chatMessage user">Hej, vad erbjuder ni?</div>
              <div className="chatMessage bot">Vi erbjuder {company.services}.</div>
              <div className="chatMessage user">När har ni öppet?</div>
              <div className="chatMessage bot">Våra öppettider är {company.hours}.</div>
              <div className="chatMessage user">Hur kontaktar jag er?</div>
              <div className="chatMessage bot">Du kan nå oss på {company.phone} eller {company.email}.</div>
            </div>

            <h3>Installationskod</h3>
            <code>{'<script src="https://autokund-ai.vercel.app/widget.js"></script>'}</code>
          </div>
        </div>
      </section>
    </main>
  );
}
