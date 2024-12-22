import { Route, BrowserRouter, Routes } from "react-router-dom";
import CandidatePortal from "./pages/CandidatePortal";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<CandidatePortal />} />
      </Routes>
    </BrowserRouter>
  );
}
