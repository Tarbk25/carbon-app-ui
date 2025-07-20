// src/App.tsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoutes";

import Navbar from "./components/NavBar";
import LoginPage from "./pages/Login";
import LookerDashboard from "./pages/LookerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <Navbar />
        <Routes>
          {/* Login route (public) */}
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboard route (protected for logged-in users) */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <LookerDashboard />
              </PrivateRoute>
            }
          />

          {/* Admin-only dashboard */}
          <Route
            path="/admin-dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          {/* Placeholder routes for future components */}
          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <div>Calculator Page</div>
              </PrivateRoute>
            }
          />
          <Route
            path="/hotspots"
            element={
              <PrivateRoute>
                <div>Hotspots Page</div>
              </PrivateRoute>
            }
          />
          <Route
            path="/solutions"
            element={
              <PrivateRoute>
                <div>Solutions Page</div>
              </PrivateRoute>
            }
          />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
