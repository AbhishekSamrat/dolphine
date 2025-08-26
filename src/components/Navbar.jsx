import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="shadow-md relative z-50">
      {/* 🔹 Top Bar */}
      <div className="bg-teal-700 text-white text-sm py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-center">
          <div className="text-center sm:text-left font-medium">Welcome to Dolphin</div>
          <div className="text-center sm:text-right font-semibold">
            {time.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white relative z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Dolphin EdTech Miracles"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <DesktopNav />
            <Link
              to="/obtain-report"
              className="ml-2 inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition"
            >
              Obtain Report
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Overlay */}
      {open && (
        <button
          className="fixed inset-0 bg-black/30 backdrop-blur-[1px] md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      {/* 🔹 Mobile Slide-down Panel */}
      <div
        className={`md:hidden absolute z-50 w-full bg-white border-t border-gray-200 shadow-lg transition-transform duration-200 ${
          open ? "translate-y-0" : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <MobileNav onNavigate={() => setOpen(false)} />
        </div>
      </div>

      {/* 🔹 Floating Social Icons */}
      {!location.pathname.startsWith("/report") && (
        <div className="fixed top-2/3 left-0 flex flex-col space-y-3 p-2 z-50">
          <a
            href="#"
            aria-label="Facebook"
            className="bg-black text-white p-3 rounded-r-lg shadow-md hover:bg-gray-900"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            aria-label="X (Twitter)"
            className="bg-black text-white p-3 rounded-r-lg shadow-md hover:bg-gray-900"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="bg-black text-white p-3 rounded-r-lg shadow-md hover:bg-gray-900"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      )}
    </div>
  );
}

/* =========================
   Desktop Navigation
   ========================= */
function DesktopNav() {
  const base =
    "font-medium hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded transition";
  return (
    <div className="flex items-center space-x-6">
      <NavItem to="/" className={base}>Home</NavItem>
      <Dropdown
        label="About DEM Scan"
        items={[
          { to: "/about", label: "Overview" },
          { to: "/benefits", label: "Benefits" },
          { to: "/career-insights", label: "Career Insights" },
          { to: "/testimonials", label: "Testimonials" },
        ]}
      />
      <Dropdown
        label="Franchisee"
        items={[
          { to: "/franchisee/state", label: "State Franchisee" },
          { to: "/franchisee/district", label: "District Franchisee" },
          { to: "/franchisee/unit", label: "Unit Franchisee" },
          { to: "/eec", label: "EEC" },
        ]}
      />
      <NavItem to="/faq" className={base}>FAQ</NavItem>
      <NavItem to="/resources" className={base}>Resource Centre</NavItem>
      <NavItem to="/contact" className={base}>Contact Us</NavItem>
    </div>
  );
}

function NavItem({ to, className, children }) {
  return <Link to={to} className={className}>{children}</Link>;
}

function Dropdown({ label, items = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="inline-flex items-center gap-1 font-medium hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded transition"
        onClick={() => setOpen((v) => !v)}
      >
        {label} <FiChevronDown className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute left-0 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg z-50 transition transform origin-top ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block px-4 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-1 w-full bg-amber-600 rounded-b-none rounded-t-lg" />
      </div>
    </div>
  );
}

/* =========================
   Mobile Navigation
   ========================= */
function MobileNav({ onNavigate }) {
  const linkBase = "block w-full text-left font-medium py-3 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded";

  return (
    <div className="space-y-1">
      <Link to="/" className={linkBase} onClick={onNavigate}>Home</Link>
      <MobileAccordion
        title="About DEM Scan"
        items={[
          { to: "/about", label: "Overview" },
          { to: "/about/benefits", label: "Benefits" },
          { to: "/about/career-insights", label: "Career Insights" },
          { to: "/testimonials", label: "Testimonials" },
        ]}
        onNavigate={onNavigate}
      />
      <MobileAccordion
        title="Franchisee"
        items={[
          { to: "/franchisee/state", label: "State Franchisee" },
          { to: "/franchisee/district", label: "District Franchisee" },
          { to: "/franchisee/unit", label: "Unit Franchisee" },
          { to: "/franchisee/eec", label: "EEC" },
        ]}
        onNavigate={onNavigate}
      />
      <Link to="/faq" className={linkBase} onClick={onNavigate}>FAQ</Link>
      <Link to="/resources" className={linkBase} onClick={onNavigate}>Resource Centre</Link>
      <Link
        to="/obtain-report"
        className="mt-2 inline-flex items-center justify-center w-full rounded-lg bg-green-500 px-4 py-3 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition"
        onClick={onNavigate}
      >
        Obtain Report
      </Link>
      <Link to="/contact" className={linkBase} onClick={onNavigate}>Contact Us</Link>
    </div>
  );
}

function MobileAccordion({ title, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full flex items-center justify-between px-3 py-3 font-medium hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        aria-controls={`section-${id}`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <FiChevronDown className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        id={`section-${id}`}
        className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="py-1">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block px-4 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-700"
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
