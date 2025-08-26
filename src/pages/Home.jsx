import React from "react";
import { Link } from "react-router-dom";
import FullWidthSlider from "../components/FullWidthSlider";


export default function Home() {
  return (
    <div className="text-gray-800 bg-gray-50">
      {/* Full width slider */}
      <div className="relative w-full overflow-hidden">
        <FullWidthSlider />

        {/* Hero content over the slider */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto max-w-4xl mx-4 sm:mx-6 px-6 py-10 bg-white/80 backdrop-blur rounded-2xl text-center shadow-xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900">
              Unlock Your Child's Full Potential: Personalized Guidance for Academic and Career Success
            </h1>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
              Discover their unique strengths, identify areas for growth, and chart a course towards a fulfilling future with the DEM Scan Report.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition"
              >
                Get Your Child's DEM Scan Report Today!
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-200 text-blue-700 bg-white/90 hover:bg-blue-50 transition"
              >
                How it Works
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Welcome Section from Basic Version */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-emerald-700">Welcome to Quiz App</h2>
          <p className="mt-3 text-gray-600">
            Complete the registration, make payment, and take your assessment.
          </p>
          <div className="mt-6">
            <Link to="/register">
              <button className="px-6 py-3 rounded bg-emerald-600 text-white hover:bg-emerald-700 transition">
                Register & Start
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main content section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-emerald-700">Quick Overview</h2>
          <p className="mt-3 text-gray-600">
            The DEM Scan Report blends time-tested knowledge with modern assessment science to map a child's innate abilities and recommended learning paths.
          </p>

          {/* small features grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
              Discover hidden talents
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-emerald-500">
              Personalized learning recommendations
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-purple-500">
              Clear career guidance
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
              Holistic development
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-pink-500">
              Actionable insights for parents
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
