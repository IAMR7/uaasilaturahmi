import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterPage from "./pages/Register/RegisterPage";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProfileEditPage from "./pages/Profile/Profile Edit/ProfileEditPage";
import PasswordEditPage from "./pages/Password Edit/PasswordEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/password/edit" element={<PasswordEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
