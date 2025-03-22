import { Routes, Route, Navigate } from "react-router-dom";
import VolunteerDashboard from "./component/Volunteer";
import EventsPage from "./component/EventsPage";
import EventDetail from "./component/EventDetail";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VolunteerDashboard />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
