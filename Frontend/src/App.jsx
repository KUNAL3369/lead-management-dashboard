import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LeadDetails from "./pages/LeadDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lead/:id" element={<LeadDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
