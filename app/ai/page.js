"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AIReceptionistPage() {
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [leadMode, setLeadMode] = useState(false);
  const [lead, setLead] = useState({
    name: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    async function loadData() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        window.location.href = "/login";
        return;
      }

      setUser(data.user);

      const { data: companyData } = await supabase
        .from("companies")
        .select("*")
        .eq("user_id", data.user.id)
        .maybeSingle();

      setCompany(companyData);
    }

    loadData();
  }, []);

  function generateAnswer() {
    const q = question.toLowerCase();

    if (!company) {
      setAnswer("Du behöver först fylla i företagsinformationen i dashboarden.");
      return;
    }

    if (
      q.includes("boka") ||
      q.includes("tid") ||
      q.includes("kontaktad") ||
      q.includes("ringa") ||
      q.includes("offert")
    ) {
      setLeadMode(true);
      setLead({ ...lead, message: question });
      setAnswer("Absolut! Lämna ditt namn och telefonnummer så kan företaget kontakta dig.");
      return;
    }

    if (q.includes("öppet") || q.includes("öppettider")) {
      setAnswer(`Våra öppettider är: ${company.opening_hours || "inte angivna ännu"}.`);
    } else if (q.includes("tjänst") || q.includes("erbjuder") || q.includes("gör ni")) {
      setAnswer(`Vi erbjuder: ${company.services || "inga tjänster angivna ännu"}.`);
    } else if (q.includes("telefon") || q.includes("kontakt")) {
      setAnswer(`Du kan kontakta oss på ${company.phone || "telefon saknas"} eller ${company.email || "e-post saknas"}.`);
    } else {
      setAnswer(`Tack för din fråga! Kontakta oss gärna på ${company.email || "vår e-post"} så hjälper vi dig vidare.`);
    }
  }

  function saveLead() {
    if (!lead.name || !lead.phone) {
      alert("Fyll i namn och telefonnummer.");
      return;
    }

    alert(
      `Lead sparad!\n\nNamn: ${lead.name}\nTelefon: ${lead.phone}\nÄrende: ${lead.message}`
    );

    setLeadMode(false);
    setQuestion("");
    setAnswer("Tack! Din förfrågan har skickats vidare till företaget.");
    setLead({ name: "", phone: "", message: "" });
  }

  if (!user) {
    return <main className="loading">Laddar AI Receptionist...</main>;
  }

  return (
    <main className="dashboard">
      <aside className="sidebar">
        <h2>AutoKund AI</h2>
        <a href="/dashboard">Dashboard</a>
        <a href="/ai">🤖 AI Receptionist</a>
        <a href="/install">🌐 Installation</a>
      </aside>

      <section className="dashContent">
        <h1>AI Receptionist</h1>
        <p className="muted">
          Testa hur AI:n svarar och samlar kundförfrågningar.
        </p>

        <div className="panel">
          <h2>{company?.company_name || "Ditt företag"}</h2>

          <label>Ställ en fråga</label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex: Jag vill boka tid"
          />

          <button onClick={generateAnswer}>Skicka fråga</button>

          {answer && (
            <div className="message">
              <strong>AI svarar:</strong>
              <p>{answer}</p>
            </div>
          )}

          {leadMode && (
            <div className="message">
              <h3>Kundförfrågan</h3>

              <label>Namn</label>
              <input
                value={lead.name}
                onChange={(e) => setLead({ ...lead, name: e.target.value })}
                placeholder="Kundens namn"
              />

              <label>Telefonnummer</label>
              <input
                value={lead.phone}
                onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                placeholder="070-000 00 00"
              />

              <label>Ärende</label>
              <textarea
                value={lead.message}
                onChange={(e) => setLead({ ...lead, message: e.target.value })}
              />

              <button onClick={saveLead}>Skicka förfrågan</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}