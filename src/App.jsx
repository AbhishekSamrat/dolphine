import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Core layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (merged from both lists)
import Home from "./pages/Home";
import Register from "./pages/Register";


import Payment from "./pages/Payment";
import Assessment from "./pages/Assessment";
import Report from "./pages/Report";
import About from "./pages/About";
import Franchise from "./pages/Franchise";
import FAQ from "./pages/Faq";
import Resources from "./pages/Resources";
import Purchase from "./pages/Purchase";
import HowItWorks from "./pages/HowItWorks";
import Testimonials from "./pages/Testimonials";
import Benefits from "./pages/Benefits";
import CareerInsights from "./pages/CareerInsights";
import EEC from "./pages/EEC";
import ContactUs from "./pages/ContactUs";

// Combined App component with all routes
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-800 flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Home />} />

            {/* Registration routes */}
           
            <Route path="/register" element={<Register />} /> {/* optional alias */}

            {/* Payment: support both param and non-param variants */}
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/:userId" element={<Payment />} />

            {/* Assessment & Report (user-specific) */}
            <Route path="/assessment/:userId" element={<Assessment />} />
            <Route path="/report/:userId" element={<Report />} />

            {/* Informational pages */}
            <Route path="/about" element={<About />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/career-insights" element={<CareerInsights />} />
            <Route path="/eec" element={<EEC />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Backwards-compatibility / aliases */}
        

            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
