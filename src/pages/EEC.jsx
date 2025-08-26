import React from "react";

// Educational Excellence Counsellor (EEC) Recruitment Page
// Tailwind CSS required. Place as src/pages/EEC.jsx

export default function EEC() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Become a Dolphin EdTech Miracles Educational Excellence Counsellor (EEC)</h1>
          <p className="mt-3 text-slate-600">Mumbai Region — Mumbai, Thane, Palghar &amp; Raigad</p>
          <p className="mt-6 text-lg font-medium text-indigo-700">Unleash Your Potential, Transform Lives, Command Your Income!</p>
        </div>

        {/* Imagine This */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Imagine This</h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc list-inside">
              <li>You’re the go-to expert in your community, guiding students using our AI-powered DEM Scan Report.</li>
              <li>You build a flexible business that fits your lifestyle with unlimited earning potential.</li>
              <li>You impact students every day, helping them unlock talents and achieve dreams.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Why Choose Dolphin EdTech Miracles?</h3>
            <ol className="mt-4 space-y-3 text-slate-700 list-decimal list-inside">
              <li><strong>Make a Real Impact:</strong> Transform lives with a proven program.</li>
              <li><strong>Be Your Own Boss:</strong> Enjoy freedom and flexibility.</li>
              <li><strong>Unlimited Earning Potential:</strong> Performance-based income that scales.</li>
              <li><strong>Cutting-Edge Technology:</strong> AI-driven Scan Report + Vedic-modern methodology.</li>
              <li><strong>Comprehensive Support:</strong> Training, ongoing support, and marketing resources.</li>
            </ol>
          </div>
        </div>

        {/* Responsibilities & Who we're looking for */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">What You'll Do</h3>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc list-inside">
              <li>Connect with students &amp; families through schools, events, and online channels.</li>
              <li>Provide personalized counselling sessions interpreting Scan Reports.</li>
              <li>Manage leads, track progress, and grow your business using our CRM.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Who We’re Looking For</h3>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc list-inside">
              <li>Passionate about education and empowering students.</li>
              <li>Excellent communicators with relationship-building skills.</li>
              <li>Self-motivated, driven to succeed, and ethically committed.</li>
            </ul>
          </div>
        </div>

        {/* Requirements & Path to Success */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Easy Requirements to Get Started</h3>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc list-inside">
              <li>Bachelor's degree (any field). Master's preferred.</li>
              <li>Strong communication skills.</li>
              <li>Basic digital literacy.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Your Path to Success</h3>
            <ol className="mt-3 space-y-2 text-slate-700 list-decimal list-inside">
              <li>Apply Online: Submit your application today.</li>
              <li>Interview: Show your passion and skills.</li>
              <li>Get Trained: Become a certified DEM EEC.</li>
              <li>Launch Your Business: Transform lives and earn income.</li>
            </ol>
          </div>
        </div>

        {/* Earnings model */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Earnings &amp; Revenue Model (Transparent)</h3>
          <p className="mt-3 text-slate-700">DEM Scan Report pricing and EEC earnings are designed to be transparent and fair.</p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="text-sm text-slate-500 border-b">
                  <th className="py-2">Item</th>
                  <th className="py-2">Amount (INR)</th>
                  <th className="py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">MRP per student</td>
                  <td className="py-3">5,500</td>
                  <td className="py-3">Suggested retail price</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3">Base Price (payable to company)</td>
                  <td className="py-3">2,250</td>
                  <td className="py-3">Paid upfront to company</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">EEC Discount Range (allowed)</td>
                  <td className="py-3">10% - 30%</td>
                  <td className="py-3">EEC can offer discounts on MRP to customers</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="py-3">Earnings</td>
                  <td className="py-3">MRP - Base Price (minus any discount)</td>
                  <td className="py-3">Remaining share retained by EEC after base price deposit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700">Earnings depend on outreach, conversion, and effort. Top counsellors have high earning potential through consistent work and effective local marketing.</p>
        </div>

        {/* CTA & Contact */}
        <div className="mt-10 rounded-2xl bg-indigo-600 text-white p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <h4 className="text-xl font-bold">Ready to Transform Lives and Take Control of Your Future?</h4>
              <p className="mt-2 text-indigo-100">Limited territories available. Apply now to secure your area.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
              <a href="#apply" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-indigo-700 font-semibold shadow">Apply Online</a>
              <a href="mailto:dolphin.edtewch@gmail.com" className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-white">Email Us</a>
            </div>
          </div>

          <div className="mt-6 text-sm text-indigo-100">Contact: dolphin.edtewch@gmail.com | Phone: +91 7977693348 | Website: www.dolphinedtech.com</div>
        </div>
      </div>
    </section>
  );
}
