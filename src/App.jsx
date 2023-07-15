import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterPage from "./pages/Register/RegisterPage";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProfileEditPage from "./pages/Profile/ProfileEdit/ProfileEditPage";
import PasswordEditPage from "./pages/PasswordEdit/PasswordEditPage";
import NotFoundPage from "./pages/Error/NotFoundPage";
import SearchPage from "./pages/Search/SearchPage";
import MePage from "./pages/Me/MePage";
import NotificationsPage from "./pages/Notification/NotificationsPage";
import FriendPage from "./pages/Friend/FriendPage";
import VerifiedPage from "./pages/Verified/VerifiedPage";
import TicketPage from "./pages/Ticket/TicketPage";
import DashboardPage from "./pages/Admin/Dashboard/DashboardPage";
import UsersManagementPage from "./pages/Admin/UsersManagement/UsersManagementPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/error/404" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/friend/:id" element={<FriendPage />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/password/edit" element={<PasswordEditPage />} />
        <Route path="/verified" element={<VerifiedPage />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
      <Routes>
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route
          path="/admin/usersmanagement"
          element={<UsersManagementPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
