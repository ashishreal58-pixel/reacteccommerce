import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-black text-white min-h-screen" : ""}>
      <button
        onClick={() => setDark(!dark)}
        className="p-2 bg-gray-200"
      >
        Toggle Dark Mode
      </button>

      <BrowserRouter>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}
