import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const limit = 10;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await API.get(
          `/api/leads?search=${search}&status=${status}&page=${page}&limit=${limit}`
        );
        setLeads(res.data.leads);
        setTotal(res.data.total);
      } catch (err) {
        console.error("Failed to fetch leads", err);
      }
    }

    fetchLeads();
  }, [page, status, search]);

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <h2 style={{ marginBottom: "8px" }}>Lead Management Dashboard</h2>

      {/* Analytics */}
      <p style={{ marginBottom: "16px" }}>
        <strong>Total Leads:</strong> {total}
      </p>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <input
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px 10px",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            background: "var(--card)",
            color: "var(--text)",
          }}
        />

        <button
          onClick={() => setPage(1)}
          style={{
            padding: "8px 14px",
            borderRadius: "6px",
            border: "none",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Search
        </button>

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid var(--border)",
            background: "var(--card)",
            color: "var(--text)",
          }}
        >
          <option value="">All</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      {/* Leads Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "var(--header)" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Company</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>View</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id} style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={tdStyle}>{lead.name}</td>
              <td style={tdStyle}>{lead.company}</td>
              <td style={tdStyle}>
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
              </td>
              <td style={tdStyle}>
                <Link to={`/lead/${lead._id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={paginationBtn(page === 1)}
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          style={paginationBtn(page === totalPages)}
        >
          Next
        </button>
      </div>
    </div>
  );
}



const thStyle = {
  padding: "12px",
  textAlign: "left",
  fontWeight: "600",
  borderBottom: "1px solid var(--border)",
};

const tdStyle = {
  padding: "10px",
};

function paginationBtn(disabled) {
  return {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid var(--border)",
    background: "var(--card)",
    color: "var(--text)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };
}
