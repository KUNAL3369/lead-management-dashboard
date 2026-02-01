# Lead Management Dashboard (Admin Tool)

A production-style **internal dashboard application** built to manage, filter, and review lead data at scale.
This project focuses on **frontend architecture, API-driven UI design, and real-world data handling**, similar to internal tools used by sales, operations, and platform teams.

The goal of this project was not just to display data, but to **design a usable, scalable dashboard interface** backed by real APIs and persistent storage.

---

## Key Highlights

- Built as an **internal admin tool**, not a consumer-facing UI
- Frontend-first design with **server-driven pagination and filtering**
- Handles realistic data volumes instead of mock JSON
- Clean separation between UI, API logic, and data storage
- Designed with maintainability and clarity in mind

---

## Features

### Lead Listing Dashboard
- Paginated table view with real API-backed data
- Server-side pagination for performance and scalability

### Search & Filtering
- Filter leads by status
- Search leads by name or email

### Lead Detail View
- View complete lead information
- Update lead status

### Persistent Data
- Data stored in MongoDB
- Seeded dataset for realistic testing

### Responsive UI
- Optimized for desktop and laptop screens
- Clean, readable layout for internal users

---

## Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- CSS (Flexbox & layout-focused styling)

### Backend
- Node.js
- Express
- MongoDB (Mongoose)

### Deployment
- Frontend: Vercel
- Backend: Render

---

## Architecture Overview

```
Frontend (React)
   ↓ REST APIs
Backend (Node + Express)
   ↓
MongoDB
```

- The frontend consumes **paginated and filtered API responses**
- Business logic and data access are handled on the server
- The UI remains focused on rendering, interaction, and state management

---

## Project Structure

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

## Implementation Notes

### Pagination & Filtering

Pagination and filtering are implemented **server-side** to reflect real production behavior.
The frontend requests only the data required for the current page and filter state, keeping the UI responsive even as data size grows.

### Frontend Focus

While a backend is included, the primary learning objective was:

- Consuming real APIs
- Designing dashboard UIs
- Managing async data states
- Building interfaces used by internal teams

### Data Modeling

Leads are stored with realistic fields such as name, email, source, and status, allowing meaningful filtering and updates.

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/lead-management-dashboard.git
cd lead-management-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start backend

```bash
npm run server
```

### 4. Start frontend

```bash
npm start
```

---

## Why This Project Matters

This project demonstrates how frontend dashboards interact with real backend systems and operational data. It reflects practical experience with internal/admin tooling, including scalability concerns such as pagination, filtering, and API-driven UI updates.

**The same patterns used here are directly applicable to:**

- Internal company dashboards
- Admin and operations panels
- CRM-style interfaces
- Platform and tooling dashboards

---

## Summary

This project highlights my ability to build API-driven frontend interfaces that go beyond static UI demos, focusing on real data flow, system constraints, and usability considerations found in professional engineering environments.

---
