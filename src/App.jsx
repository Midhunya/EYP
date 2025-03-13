import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import PreparePage from "./components/PreparePage";
import MitigatePage from "./components/MitigatePage";
import Details from "./components/Details";
import Ransomware from "./components/Ransomware";
import RolesBox from "./components/RolesDetails"; // ✅ Fixed import

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prepare" element={<PreparePage />} />
          <Route path="/mitigate" element={<MitigatePage />} />
          <Route path="/details/:category" element={<Details />} />
          <Route path="/ransomware" element={<Ransomware />} />
          <Route path="/roles/:role" element={<RolesBox />} /> {/* ✅ Fixed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
