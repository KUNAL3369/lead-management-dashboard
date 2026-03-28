<div align="center">

# 🗂️ Lead Management Dashboard

**A production-style internal admin tool to manage, filter, and review lead data at scale.**

Built to reflect how real sales, operations, and platform teams interact with internal CRM tooling.

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://lead-management-dashboard-rosy.vercel.app/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge)](https://render.com/)

</div>

---

## ⚡ Try It Right Now

No setup. No sign-up. Just open and explore.

| | |
|---|---|
| 🌐 **Live URL** | https://lead-management-dashboard-rosy.vercel.app/ |

---

## 🧠 The Problem It Solves

Internal teams managing leads — sales, ops, and support — need fast, filterable views into their data. Spreadsheets break at scale. Consumer UIs aren't built for operational workflows.

This dashboard gives internal users:

- 📋 A paginated, filterable view of all lead records
- 🔍 Real-time search by name or email
- 🔄 Status updates directly from the dashboard
- 📦 Server-side data handling that scales beyond mock JSON

---

## 🔥 Key Highlights

- Server-side pagination and filtering — not fake client-side slicing
- Full-stack architecture: React frontend consuming a real Node + Express API
- Seeded MongoDB dataset for realistic data volume testing
- Clean separation between UI, API logic, and data storage

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 **Lead Listing Dashboard** | Paginated table view backed by real API data |
| 🔍 **Search & Filter** | Filter by status, search by name or email |
| 👤 **Lead Detail View** | View full lead info and update status inline |
| 💾 **Persistent Storage** | MongoDB with seeded dataset for realistic testing |
| ⚡ **Server-Side Pagination** | Only fetches data needed per page — scales cleanly |
| 🖥️ **Internal UI** | Optimized for desktop — built for operational users, not consumers |

---

## 🏗️ How It Works

```
React Frontend
      │
      ▼
REST API requests (paginated + filtered)
      │
      ▼
Node.js + Express (business logic + data access)
      │
      ▼
MongoDB (Mongoose)
      │
      ▼
Only the required page + filter slice returned to UI
```

The frontend stays focused on rendering, interaction, and state management. All data logic lives on the server.

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, JavaScript (ES6+), CSS Flexbox |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Deployment | Vercel (frontend) + Render (backend) |

---

## 📁 Project Structure

```
frontend/
├── components/
│   ├── LeadTable.jsx
│   ├── LeadDetails.jsx
│   └── Filters.jsx
├── pages/
│   └── Dashboard.jsx
├── services/
│   └── api.js
└── App.jsx

backend/
├── models/
│   └── Lead.js
├── routes/
│   └── leads.js
├── controllers/
│   └── leadController.js
└── server.js
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/KUNAL3369/lead-management-dashboard.git
cd lead-management-dashboard
npm install
```

Start backend:
```bash
npm run server
```

Start frontend:
```bash
npm start
```

---

## 🎯 Why This Project Matters

- Demonstrates full-stack thinking — not just a UI consuming mock data
- Server-side pagination and filtering reflect real production constraints
- Patterns directly applicable to internal dashboards, CRM tools, admin panels, and ops tooling
- Shows ability to design for internal users — where usability and data clarity matter more than aesthetics

---

## 🔮 Planned Improvements

- [ ] Role-based access (Admin / Viewer)
- [ ] Export leads as CSV
- [ ] Lead creation form
- [ ] Activity log per lead

---

## 📬 Let's Connect

🟢 **Open to:** Frontend Engineer · Product Engineer · Internal Tools Developer · Startup Software Engineer · AI Application Developer *(entry-level & early-stage startups)*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Kunal%20Prabhakar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prabhakarkunal)
[![Email](https://img.shields.io/badge/Email-kunal.prabhakar3082@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kunal.prabhakar3082@gmail.com)

---

<div align="center">

⭐ **Found this useful? Star the repo — it helps others discover it.**

</div>
