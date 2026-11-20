import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import CardPage from "./pages/CardPage";
import CardsPage from "./pages/CardsPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import NewCardPage from "./pages/NewCardPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";

function AppRoutes({ isAuth, setIsAuth }) {
  const protect = (page) => (
    <ProtectedRoute isAuth={isAuth}>{page}</ProtectedRoute>
  );

  return (
    <Routes>
      <Route path="/" element={protect(<CardsPage />)} />
      <Route path="/new-card" element={protect(<NewCardPage />)} />
      <Route path="/card/:id" element={protect(<CardPage />)} />
      <Route
        path="/exit"
        element={protect(<ExitPage onLogout={() => setIsAuth(false)} />)}
      />
      <Route
        path="/login"
        element={
          isAuth ? (
            <Navigate to="/" replace />
          ) : (
            <LoginPage onLogin={() => setIsAuth(true)} />
          )
        }
      />
      <Route
        path="/register"
        element={isAuth ? <Navigate to="/" replace /> : <RegisterPage />}
      />
      <Route path="*" element={<NotFoundPage isAuth={isAuth} />} />
    </Routes>
  );
}

export default AppRoutes;
