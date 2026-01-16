--

# Lead Management Dashboard

This project is a simple full-stack Lead Management Dashboard built as part of a take-home assignment.
It demonstrates frontend–backend integration, server-side data handling, and a clean, responsive UI.

---

## Project Overview

The application allows users to view and manage leads stored in a MongoDB database.
Leads can be searched, filtered by status, paginated, and viewed in detail.

The focus of this project is:

- API design
- Database integration
- Frontend consumption of server-side data

---

## Features

- Dashboard listing leads in a table
- Server-side search by name
- Filter leads by status (new, contacted, converted, lost)
- Pagination
- Lead details page
- Basic login screen (demo purpose only)
- Responsive layout (works in light and dark mode)

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Axios
- React Router
- CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Project Structure (Frontend)

```
src/
├── api/
│   └── api.js
├── components/
│   └── Pagination.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── LeadDetails.jsx
│   └── Login.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## API Endpoints Used

### Get all leads

```
GET /api/leads
```

Query parameters:

- `search`
- `status`
- `page`
- `limit`

Example:

```
/api/leads?search=john&status=converted&page=1&limit=10
```

---

### Get lead by ID

```
GET /api/leads/:id
```

---

## Database Seeding

Dummy data is generated using Faker.

- Total records: **300 leads**

Run once before starting the backend:

```bash
node seed.js
```

---

## Environment Variables

### Backend (`Backend/.env`)

```
MONGO_URI=your_mongodb_connection_string
```

### Frontend (`Frontend/.env`)

```
VITE_API_BASE_URL=http://localhost:5000
```

---

## Local Setup

### Backend

```bash
cd Backend
npm install
node seed.js
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Demo Login

```
Username: admin
Password: admin123
```

(Authentication is intentionally basic and used only for demonstration.)

---

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas (free tier)

---

## Deployed URLs

- Frontend: `<add frontend URL>`
- Backend: `<add backend URL>`

---
