// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// Import the new global styles file
import "./styles/GlobalStyles.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays outside the main content wrapper */}
      <Navbar />

      {/* The main-content class will apply padding and structure to all pages */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add your other routes here */}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
