"use client";

import { useState } from "react";

export default function AIReceptionist({ company }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function generateAnswer() {
    const q = question.toLowerCase();

    if (q.includes("öppet") || q.includes("öppettider")) {
      setAnswer(`Våra öppettider är: ${company.hours || "inte angivna ännu"}.`);
    } else if (q.includes("tjänst") || q.includes("erbjuder") || q.includes("gör ni")) {
      setAnswer(`Vi erbjuder: ${company.services || "inga tjänster angivna ännu"}.`);
    } else if (q.includes("telefon") || q.includes("ringa") || q.includes("kontakt")) {
      setAnswer(`Du kan kontakta oss på ${company.phone || "telefon saknas"} eller ${company.email || "e-post saknas"}.`);
    } else if (q.includes("boka") || q.includes("tid")) {
      setAnswer(`Du kan boka här: ${company.booking || "bokningslänk saknas"}.`);
    } else {
      setAnswer(`Tack för din fråga! Kontakta oss gärna på ${company.email || "vår e-post"} så hjälper vi dig vidare.`);
    }
  }

  return (
    <div className="panel">
      <h2>🤖 AI Receptionist</h2>
      <p className="muted">Testa hur AI:n skulle svara kunder baserat på företagets information.</p>

      <label>Ställ en fråga</label>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ex: Har ni öppet på lördag?"
      />

      <button onClick={generateAnswer}>Skicka fråga</button>

      {answer && (
        <div className="message">
          <strong>AI svarar:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}