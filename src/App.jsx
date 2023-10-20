import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./ui/routes/Login";
import ProtectedRoute from "./ui/routes/ProtectedRoute";
import Root from "./ui/layout/Root";
import Dashboard from "./ui/routes/Dashboard";
import Bookings from "./ui/routes/Bookings";
import Booking from "./ui/routes/Booking";
import Checkin from "./ui/routes/Checkin";
import Cabins from "./ui/routes/Cabins";
import Users from "./ui/routes/Users";
import Settings from "./ui/routes/Settings";
import Account from "./ui/routes/Account";
import PageNotFound from "./ui/routes/PageNotFound";

import { DarkModeContextProvider } from "./context/DarkModeContext";
import Guests from "./ui/routes/Guests";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <DarkModeContextProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Root />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:bookingId" element={<Booking />} />
            <Route path="checkin/:bookingId" element={<Checkin />} />
            <Route path="guests" element={<Guests />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeContextProvider>
  );
};

export default App;
