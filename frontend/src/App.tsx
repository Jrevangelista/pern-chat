import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  const {authUser, isLoading } = useAuthContext();
  if (isLoading) return null;
  return (
    <div className="p4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/signup" element={!authUser ? <SignUp /> : <Navigate to={"/"} />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to={"/"} />} />
      </Routes>
      <Toaster />
    </div>
  )
}