import React from "react";

// Benefits Page — DEM Scan
// Tailwind CSS required. Place as src/pages/Benefits.jsx

export default function Benefits() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Unlock a Brighter Future for Your Child</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            The Dolphin EdTech Miracles DEM Scan Report and program offer a wealth of specific advantages, empowering both students and parents on their journey to academic excellence and lifelong success.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
          {/* Students Card */}
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">For Students</h2>
                <p className="mt-1 text-sm text-slate-600">Discover Your Unique Potential</p>
              </div>
              <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-indigo-50">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v6" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 8v8a6 6 0 0012 0V8" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <ol className="mt-6 space-y-4 list-decimal list-inside text-slate-700">
              <li><strong>Uncover Hidden Talents &amp; Strengths:</strong> Identify natural abilities and aptitudes, even those you may not be aware of.</li>
              <li><strong>Personalized Learning Strategies:</strong> Discover the learning style and techniques that work best for you, maximizing efficiency and enjoyment.</li>
              <li><strong>Gain Confidence &amp; Self-Awareness:</strong> Develop a deeper understanding of your personality, strengths, and weaknesses.</li>
              <li><strong>Navigate Academic Challenges with Resilience:</strong> Build emotional intelligence and coping mechanisms for stress and setbacks.</li>
              <li><strong>Explore Career Options with Clarity:</strong> Identify career paths that align with passions and abilities.</li>
              <li><strong>Take Ownership of Your Learning Journey:</strong> Become an active participant in your education with actionable strategies.</li>
              <li><strong>Sharpen Focus &amp; Concentration:</strong> Improve present-moment attention and productivity.</li>
              <li><strong>Improved Memory &amp; Recall:</strong> Enhance short-term and long-term memory for efficient learning.</li>
            </ol>
          </div>

          {/* Parents Card */}
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">For Parents</h2>
                <p className="mt-1 text-sm text-slate-600">Empower Your Child's Success</p>
              </div>
              <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-amber-50">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3v4" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 21v-6a7 7 0 0114 0v6" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <ol className="mt-6 space-y-4 list-decimal list-inside text-slate-700">
              <li><strong>Gain a Deeper Understanding of Your Child:</strong> Receive valuable insights into learning style, strengths, and challenges.</li>
              <li><strong>Make Informed Educational Decisions:</strong> Choose programs and activities that match their needs.</li>
              <li><strong>Provide Targeted Support &amp; Guidance:</strong> Offer personalized encouragement based on clear insights.</li>
              <li><strong>Facilitate Open Communication:</strong> Strengthen parent-child relationships with a shared roadmap.</li>
              <li><strong>Help Them Navigate Competitive Exams:</strong> Equip them with tools and strategies for challenging environments.</li>
              <li><strong>Maximize Their Potential:</strong> Unlock talents and develop skills for academic and life success.</li>
              <li><strong>Reduce Stress &amp; Anxiety:</strong> Support emotional well-being and coping skills.</li>
              <li><strong>Prepare Them for a Fulfilling Future:</strong> Help them make informed career choices and live purposefully.</li>
            </ol>
          </div>
        </div>

        {/* Gap & Summary */}
        <div className="mt-10 rounded-2xl bg-indigo-50 p-6 shadow-sm ring-1 ring-indigo-100">
          <h3 className="text-lg font-semibold text-indigo-900">A Clear Path Forward</h3>
          <p className="mt-3 text-slate-700">The DEM Scan Report and Program are an investment in your child's future — providing personalized guidance, identifying gaps, and offering a clear plan to help students progress according to their individual needs.</p>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <MiniStat label="Personalized Plans" value="Yes" />
            <MiniStat label="Follow-up Roadmap" value="6–24 mo" />
            <MiniStat label="Areas Covered" value="231 factors" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Ready to give your child the advantage?</h4>
            <p className="text-slate-600">Book a DEM Scan and receive a tailored report with actionable next steps.</p>
          </div>
          <div className="flex gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:opacity-95">Book a DEM Scan</a>
            <a href="#learn-more" className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-3 text-slate-700">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200 text-center">
      <div className="text-xs font-medium text-slate-500 uppercase">{label}</div>
      <div className="mt-1 font-semibold text-slate-900">{value}</div>
    </div>
  );
}
