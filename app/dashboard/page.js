export default function Dashboard() {
  const company = {
    name: 'Din Salong',
    services: 'Klippning, färgning, styling',
    hours: 'Mån–fre 09:00–18:00',
    phone: '070-000 00 00',
    email: 'kontakt@dinsalong.se',
    booking: 'https://example.com/boka'
  };

  return (
    <main className="dashboard">
      <aside className="sidebar">
        <h2>AutoKund AI</h2>
        <a>Dashboard</a>
        <a>Företagsinfo</a>
        <a>Chatbot</a>
        <a>Installation</a>
      </aside>

      <section className="dashContent">
        <h1>Dashboard-demo</h1>
        <p className="muted">Här kommer kunden senare kunna fylla i sin företagsinformation.</p>

        <div className="dashGrid">
          <div className="panel">
            <h2>Företagsinfo</h2>
            <label>Företagsnamn</label><input defaultValue={company.name} />
            <label>Tjänster</label><textarea defaultValue={company.services} />
            <label>Öppettider</label><input defaultValue={company.hours} />
            <label>Telefon</label><input defaultValue={company.phone} />
            <label>E-post</label><input defaultValue={company.email} />
            <label>Bokningslänk</label><input defaultValue={company.booking} />
            <button>Spara ändringar</button>
          </div>

          <div className="panel">
            <h2>Chatbot-preview</h2>
            <div className="miniChat">
              <div className="miniHeader">{company.name}</div>
              <div className="chatMessage user">Hej, vad erbjuder ni?</div>
              <div className="chatMessage bot">Vi erbjuder {company.services}.</div>
              <div className="chatMessage user">När har ni öppet?</div>
              <div className="chatMessage bot">Våra öppettider är {company.hours}.</div>
            </div>
            <h3>Installationskod</h3>
            <code>{'<script src="https://autokund.ai/widget.js"></script>'}</code>
          </div>
        </div>
      </section>
    </main>
  );
}
