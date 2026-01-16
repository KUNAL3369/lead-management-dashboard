import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/api";

export default function LeadDetails() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    async function fetchLead() {
      try {
        const res = await API.get(`/api/leads/${id}`);
        setLead(res.data);
      } catch (err) {
        console.error("Failed to load lead details", err);
      }
    }

    fetchLead();
  }, [id]);

  if (!lead) {
    return (
      <div style={{ padding: "24px", textAlign: "center" }}>
        Loading lead details...
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <h2 style={{ marginBottom: "16px" }}>Lead Details</h2>

      {/* Card */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <DetailRow label="Name" value={lead.name} />
        <DetailRow label="Email" value={lead.email} />
        <DetailRow label="Phone" value={lead.phone} />
        <DetailRow label="Company" value={lead.company} />
        <DetailRow
          label="Status"
          value={
            <span
              style={{
                padding: "4px 10px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "600",
                textTransform: "capitalize",
                background:
                  lead.status === "converted"
                    ? "#dcfce7"
                    : lead.status === "new"
                    ? "#e0f2fe"
                    : lead.status === "contacted"
                    ? "#fef9c3"
                    : "#fee2e2",
                color:
                  lead.status === "converted"
                    ? "#166534"
                    : lead.status === "new"
                    ? "#075985"
                    : lead.status === "contacted"
                    ? "#854d0e"
                    : "#991b1b",
              }}
            >
              {lead.status}
            </span>
          }
        />
      </div>

      {/* Back link */}
      <div style={{ marginTop: "16px" }}>
        <Link to="/">← Back to Dashboard</Link>
      </div>
    </div>
  );
}
function DetailRow({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ width: "120px", fontWeight: "600" }}>{label}</div>
      <div>{value}</div>
    </div>
  );
}
