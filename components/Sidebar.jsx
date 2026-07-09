export default function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <h2>AutoKund AI</h2>
      <a>Dashboard</a>
      <a>Företagsinfo</a>
      <a>AI Receptionist</a>
      <a>Installation</a>
      <button className="logout" onClick={onLogout}>
        Logga ut
      </button>
    </aside>
  );
}