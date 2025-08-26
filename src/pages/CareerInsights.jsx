import React from "react";

// Career Insights Page — DEM Scan
// Tailwind CSS required. Place as src/pages/CareerInsights.jsx

export default function CareerInsights() {
  const careers = [
    {
      title: "Technical & Scientific Careers",
      examples: "Data Scientist, Engineer, Researcher",
      insight:
        "Identifies suitability for technical fields through strengths in logical reasoning, scientific observation, and design thinking.",
      path: [
        "Sharpen analytical skills to interpret complex data.",
        "Develop programming expertise for innovative solutions.",
        "Enhance spatial intelligence for success in engineering and architecture.",
      ],
      story:
        "A student discovers a natural aptitude for data analysis and contributes to AI research.",
    },
    {
      title: "Creative & Media Careers",
      examples: "Graphic Designer, Film Director, Content Creator",
      insight:
        "Highlights potential for thriving in creative industries based on artistic sensitivity, storytelling ability, and adaptability.",
      path: [
        "Develop compelling storytelling skills.",
        "Enhance artistic vision.",
        "Cultivate teamwork skills for dynamic environments.",
      ],
      story:
        "A student becomes a successful film director creating thought-provoking movies.",
    },
    {
      title: "Healthcare & Life Sciences Careers",
      examples: "Doctor, Medical Researcher, Pharmacist",
      insight:
        "Suggests a fit for healthcare through compassion, strong observational skills, and critical thinking abilities.",
      path: [
        "Nurture empathy and communication skills for patient care.",
        "Develop scientific observation and analytical skills for research.",
        "Cultivate resilience for demanding medical environments.",
      ],
      story: "A student becomes a skilled and compassionate doctor, providing exceptional patient care.",
    },
    {
      title: "Public Service & Government Careers",
      examples: "IAS Officer, Diplomat, Social Worker",
      insight:
        "Points towards potential for impactful careers through leadership skills, ethical awareness, and a desire to serve.",
      path: [
        "Develop leadership skills for effective governance.",
        "Strengthen communication to advocate for communities.",
        "Develop ethical decision-making.",
      ],
      story:
        "A student commits to public service and rises to become a successful IAS Officer.",
    },
    {
      title: "Management & Corporate Careers",
      examples: "Entrepreneur, Marketing Manager, Business Consultant",
      insight:
        "Highlights candidates with strong leadership, negotiation skills, and communication abilities for management roles.",
      path: [
        "Nurture team spirit and communication skills.",
        "Enhance analytical and listening skills for quick growth.",
        "Improve business skills with ethical decision-making.",
      ],
      story:
        "A student guided by the DEM Scan Report rises to become a successful entrepreneur.",
    },
    {
      title: "Banking & Money Management Careers",
      examples: "Chartered Accountant, Investment Banker, Financial Analyst",
      insight:
        "Hones traits like precision and strategic thinking which are key for banking roles.",
      path: [
        "Develop analytical thinking and numerical aptitude.",
        "Practice decision-making under uncertainty.",
        "Gain domain knowledge in finance and accounting.",
      ],
      story:
        "A student clears chartered accountant exams and excels as an expert in their field.",
    },
    {
      title: "Practical & Field Work Careers",
      examples: "Architect, Civil Engineer, Sports Coach",
      insight:
        "Designed for those who thrive on hands-on work — this program enhances practical intelligence, adaptability and coordination.",
      path: [
        "Gain real-time field experience and internships.",
        "Strengthen special intelligence and problem-solving skills.",
        "Build coordination and project management capabilities.",
      ],
      story:
        "Through the program an engineer learns to plan, implement and deliver an effective infrastructure project.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Unlock Your Potential in a World of Possibilities</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">The Dolphin EdTech Miracles DEM Scan Report is your guide to exploring a diverse range of career paths, identifying those that align with your unique strengths, abilities, and passions.</p>
        </div>

        <div className="mt-10 grid gap-6">
          {careers.map((c, idx) => (
            <article key={idx} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{c.title}</h2>
                  <div className="mt-1 text-sm text-slate-500">Examples: {c.examples}</div>
                </div>
                <div className="text-sm text-slate-400">{idx + 1}</div>
              </div>

              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <h3 className="text-sm font-medium text-slate-800">The Insight</h3>
                  <p className="mt-2 text-slate-600 text-sm">{c.insight}</p>
                </div>

                <div className="md:col-span-1">
                  <h3 className="text-sm font-medium text-slate-800">The Path</h3>
                  <ul className="mt-2 text-slate-600 list-disc list-inside">
                    {c.path.map((p, i) => (
                      <li key={i} className="text-sm">{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-1">
                  <h3 className="text-sm font-medium text-slate-800">Potential Success Story</h3>
                  <p className="mt-2 text-slate-600 text-sm">{c.story}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-indigo-50 p-6 shadow-sm ring-1 ring-indigo-100">
          <h3 className="text-lg font-semibold text-indigo-900">Personalized Career Roadmaps</h3>
          <p className="mt-3 text-slate-700">No matter your chosen path, the DEM Scan Report provides the personalized insights and actionable recommendations you need to unlock your full potential and achieve your dreams.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a href="#book" className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow">Book a DEM Scan</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-3 text-slate-700">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
