import { Routes, Route } from "react-router-dom";
import SickCertificateLandingPage from "./pages/sicklandingpage";
import SickCertificatePage from "./pages/sickcertificatepage";
import FitnessCertificateLandingPage from "./pages/fitnesspage";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Verify from "./pages/verifypage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/sick-certificate"
        element={<SickCertificateLandingPage />}
      />
      <Route
        path="/fitness-certificate"
        element={<FitnessCertificateLandingPage />}
      />
      <Route path="/verify-certificate" element={<Verify />} />
      <Route path="/certificate/form" element={<SickCertificatePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;
