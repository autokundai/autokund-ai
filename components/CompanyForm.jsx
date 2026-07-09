export default function CompanyForm({ company, updateCompany, saveCompany }) {
  return (
    <div className="panel">
      <h2>Företagsinfo</h2>

      <label>Företagsnamn</label>
      <input
        value={company.name}
        onChange={(e) => updateCompany("name", e.target.value)}
      />

      <label>Tjänster</label>
      <textarea
        value={company.services}
        onChange={(e) => updateCompany("services", e.target.value)}
      />

      <label>Öppettider</label>
      <input
        value={company.hours}
        onChange={(e) => updateCompany("hours", e.target.value)}
      />

      <label>Telefon</label>
      <input
        value={company.phone}
        onChange={(e) => updateCompany("phone", e.target.value)}
      />

      <label>E-post</label>
      <input
        value={company.email}
        onChange={(e) => updateCompany("email", e.target.value)}
      />

      <label>Bokningslänk</label>
      <input
        value={company.booking}
        onChange={(e) => updateCompany("booking", e.target.value)}
      />

      <button onClick={saveCompany}>Spara ändringar</button>
    </div>
  );
}