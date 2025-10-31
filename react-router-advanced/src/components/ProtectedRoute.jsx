// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// ✅ Custom hook for authentication
export function useAuth() {
  const user = localStorage.getItem("user");
    return { isAuthenticated: !!user };
    }

    export default function ProtectedRoute({ children }) {
      const { isAuthenticated } = useAuth(); // ✅ now using the hook
        return isAuthenticated ? children : <Navigate to="/login" replace />;
        }
        