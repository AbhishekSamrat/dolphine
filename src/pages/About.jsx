import React from "react";

// About DEM Scan — Beautiful, content-rich About page
// Tailwind CSS required. No external UI libs used.
// Drop this as src/pages/About.jsx (or similar) and route to it.

export default function About() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200 via-indigo-200 to-fuchsia-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-200 via-rose-200 to-teal-200 blur-3xl opacity-50" />
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">About DEM Scan</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Unlock Your Child's Potential with Personalized Insights
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600 text-base md:text-lg">
            The DEM Scan Report is more than just an assessment; it's a comprehensive, personalized roadmap designed to empower students to achieve academic excellence and lasting success. We believe every student deserves the opportunity to discover their unique strengths, overcome challenges, and chart a course toward a fulfilling future.
          </p>
        </div>
      </div>

      {/* Intro card */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-slate-200 p-6 md:p-8">
          <p className="text-slate-700">
            The DEM Scan Report blends time-tested knowledge with modern assessment science to map a child's innate abilities and recommended learning paths. We believe every child has unique gifts — our job is to reveal them and create a plan.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">Benefits</h3>
              <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
                <li>Pinpoint academic strengths and weaknesses.</li>
                <li>Tailored study & activity recommendations.</li>
                <li>Career insights aligned to personality & aptitude.</li>
                <li>Improved study motivation and confidence.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">Methodology (At a Glance)</h3>
              <p className="mt-3 text-slate-600">
                Our process involves a validated assessment, algorithmic pattern analysis, and expert review. The result is an easy-to-read report with visual charts, prioritized recommendations, and a suggested roadmap for the next 6–24 months.
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">Career Insights (examples)</div>
                <div className="mt-2 text-sm text-slate-600">
                  Software Engineering • Design • Medicine • Entrepreneurship • Teaching • Research • Data Science
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Our Philosophy: Uncovering Innate Potential</h2>
            <p className="mt-3 text-slate-600">At Dolphin EdTech Miracles, we believe that true success arises when individual efforts align with natural talents. The DEM Scan Report aims to:</p>
          </div>
          <div className="md:col-span-3">
            <ol className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-200 p-6 space-y-4">
              {[
                {
                  title: "Identify Hidden Talents",
                  desc: "Pinpoint natural strengths that might otherwise go unnoticed.",
                },
                {
                  title: "Guide Educational Choices",
                  desc: "Recommend academic paths and learning methods best suited to your child's unique abilities.",
                },
                {
                  title: "Facilitate Career Exploration",
                  desc: "Suggest potential career fields where your child is most likely to excel and find satisfaction.",
                },
                {
                  title: "Foster Holistic Development",
                  desc: "Understand emotional, social, and spiritual predispositions to support balanced growth.",
                },
                {
                  title: "Prepare for Life's Challenges",
                  desc: "Equip students to face academic, competitive exam, and life challenges with enhanced memory, sharp focus, and a continuous goal-chasing attitude.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.title}</div>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Methodology — Blend of Wisdom & Science */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-slate-200 p-6 md:p-8 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Our Methodology: A Blend of Ancient Wisdom and Modern Science</h2>
              <p className="mt-3 text-slate-600">The DEM Scan Report utilizes a unique methodology that integrates:</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Ancient Vedic Knowledge",
                  desc: "Drawing upon timeless Indian scriptures to understand human potential and purpose.",
                },
                {
                  title: "Modern Scientific Approaches",
                  desc: "Incorporating advancements in neuroscience, psychology, and educational research.",
                },
                {
                  title: "AI-Driven Technology",
                  desc: "Leveraging artificial intelligence to analyze data, identify patterns, and generate personalized insights.",
                },
                {
                  title: "Individualized Assessment",
                  desc: "Gathering comprehensive information about each student through a thoughtfully crafted questionnaire.",
                },
                {
                  title: "231 Factors across 33 Domains",
                  desc: "Evaluating genealogical, physical, psychological, cognitive, and spiritual aspects of human personality.",
                },
              ].map((card, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-semibold">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">{card.title}</div>
                      <p className="mt-1 text-sm text-slate-600">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown of Key Methodologies */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Here's a Breakdown of Key Methodologies</h2>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {/* Data Collection */}
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">1) Data Collection</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
              <li>
                <span className="font-medium">Individual Profile:</span> Personal data points (date, time, and place of birth).
              </li>
              <li>
                <span className="font-medium">Comprehensive Survey:</span> 27 strategically formulated questions.
              </li>
            </ul>
          </div>

          {/* Data Insights & Analysis */}
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">2) Data Insights & Analysis</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
              <li>
                <span className="font-medium">Name Trigonometry:</span> Unlocking inherent nature through the power of the name.
              </li>
              <li>
                <span className="font-medium">Astro Analysis:</span> Gaining perspective and insights for informed decision-making.
              </li>
              <li>
                <span className="font-medium">Chakra Alignment:</span> Exploring energy centers to suggest improvements for well-being.
              </li>
              <li>
                <span className="font-medium">27 Questions Analysis:</span> Scientifically designed questions assessing innate abilities, personality factors, intelligence, personality traits, and skills.
              </li>
              <li>
                <span className="font-medium">AI-Driven Analysis:</span> Proprietary AI software processes all factors to generate the Scan Report.
              </li>
            </ul>
          </div>

          {/* AI-Powered & Combining Forces */}
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">3) AI-Powered Insights</h3>
              <p className="mt-2 text-slate-600">
                Providing targeted guidance for students aiming for success in competitive exams.
              </p>
            </div>
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-lg font-semibold text-slate-900">4) Combining Forces</h3>
              <p className="mt-2 text-slate-600">Analysing data points to predict performance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What the Report Provides */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-slate-200 p-6 md:p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">What the DEM Scan Report Provides</h2>
              <p className="mt-3 text-slate-600">
                The DEM Scan Report provides a comprehensive view into:
              </p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Multiple Intelligences</div>
                    <p className="text-slate-600">Understanding your child's unique cognitive strengths.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Personality Traits</div>
                    <p className="text-slate-600">Insights into their emotional and social tendencies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Innate Abilities</div>
                    <p className="text-slate-600">Identifying their natural aptitudes and talents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Career Potential</div>
                    <p className="text-slate-600">Exploring career paths aligned with their strengths and interests.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Side visual / stats */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Domains" value="33" note="Personality & potential" />
                <Stat label="Factors" value="231" note="Holistic evaluation" />
                <Stat label="Survey" value="27 Qs" note="Strategically formulated" />
                <Stat label="Roadmap" value="6–24 mo" note="Actionable next steps" />
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-5 text-white">
                <div className="text-sm uppercase tracking-wide/loose opacity-90">Outcome</div>
                <div className="mt-1 text-lg font-semibold">A powerful tool for students and parents to unlock potential, make informed decisions, and embark on a journey of lifelong learning and success.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-20">
        <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-10 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold">Ready to explore your child's unique blueprint?</h3>
              <p className="mt-2 text-slate-200">
                Get the DEM Scan Report and receive personalized insights, visual charts, and a clear path forward tailored to your child's strengths.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-white/30 hover:bg-slate-50">
                Book a DEM Scan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, note }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="text-xs text-slate-500">{note}</div>
    </div>
  );
}
