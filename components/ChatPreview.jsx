export default function ChatPreview({ company }) {
  return (
    <div className="panel">
      <h2>AI Receptionist (Förhandsvisning)</h2>

      <div className="miniChat">
        <div className="miniHeader">{company.name || "Ditt företag"}</div>

        <div className="chatMessage user">
          Hej! Vad erbjuder ni?
        </div>

        <div className="chatMessage bot">
          Vi erbjuder {company.services || "inga tjänster ännu"}.
        </div>

        <div className="chatMessage user">
          När har ni öppet?
        </div>

        <div className="chatMessage bot">
          Våra öppettider är {company.hours || "inte angivna ännu"}.
        </div>

        <div className="chatMessage user">
          Hur kontaktar jag er?
        </div>

        <div className="chatMessage bot">
          Ring oss på {company.phone || "-"} eller mejla {company.email || "-"}.
        </div>
      </div>

      <h3>Installationskod</h3>

      <code>
        {"<script src=\"https://autokund-ai.vercel.app/widget.js\"></script>"}
      </code>
    </div>
  );
}