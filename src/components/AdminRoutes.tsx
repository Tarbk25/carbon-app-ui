import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { JSX } from "react";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  return user && isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;
