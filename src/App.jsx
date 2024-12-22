import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import CandidatePortal from "./pages/CandidatePortal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard/>} />
        <Route path={"/candidate-portal"} element={<CandidatePortal />} />
        <Route path={"/admin-panel"} element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
