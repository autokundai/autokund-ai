export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">AutoKund AI</div>
        <div className="navLinks">
          <a href="#funktioner">Funktioner</a>
          <a href="#pris">Pris</a>
          <a href="/login">Logga in</a>
          <a className="smallButton" href="/signup">Skapa konto</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="badge">AI-receptionist för svenska småföretag</p>
          <h1>Fler kunder. Snabbare svar. Mindre administration.</h1>
          <p>
            AutoKund AI hjälper företag att svara på frågor, samla kundförfrågningar
            och skicka besökare vidare till bokning – direkt på hemsidan.
          </p>
          <div className="buttons">
            <a className="button primary" href="/signup">Starta gratis</a>
            <a className="button secondary" href="/dashboard">Se dashboard-demo</a>
          </div>
        </div>

        <div className="chatCard">
          <div className="chatHeader">AutoKund AI</div>
          <div className="chatMessage user">Vad kostar era tjänster?</div>
          <div className="chatMessage bot">Våra priser börjar från 499 kr. Vill du boka eller få offert?</div>
          <div className="chatMessage user">Kan jag boka tid?</div>
          <div className="chatMessage bot">Absolut! Klicka på bokningslänken så hjälper vi dig vidare.</div>
        </div>
      </section>

      <section id="funktioner" className="section">
        <h2>Vad produkten gör</h2>
        <div className="grid">
          <div className="card"><h3>Svarar på frågor</h3><p>Öppettider, priser, tjänster och kontakt.</p></div>
          <div className="card"><h3>Samlar leads</h3><p>Namn, telefonnummer och kundens ärende.</p></div>
          <div className="card"><h3>Skickar till bokning</h3><p>Besökare går vidare till bokning eller kontakt.</p></div>
        </div>
      </section>

      <section id="pris" className="section priceBox">
        <h2>Första kundpriset</h2>
        <p className="price">1 995 kr start + 795 kr/mån</p>
        <p>Introduktionspris för de första testkunderna.</p>
      </section>
    </main>
  );
}
