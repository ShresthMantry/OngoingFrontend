import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCarPage from "./pages/AddCarPage";
import CarListPage from "./pages/CarListPage";
import RentCarPage from "./pages/RentCarPage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/add-car" element={<AddCarPage />} />
        <Route path="/cars" element={<CarListPage />} />
        <Route path="/rent-car" element={<RentCarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
