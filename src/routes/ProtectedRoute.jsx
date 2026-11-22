import { Navigate, useLocation } from "react-router"

export default function ProtectedRoute({ children }) {
    const accessToken = localStorage.getItem("accessToken");
    const location = useLocation();

    if (!accessToken) {
        return <Navigate to="/SignInForm" replace state={{ from: location }} />
    }
    return children;
}