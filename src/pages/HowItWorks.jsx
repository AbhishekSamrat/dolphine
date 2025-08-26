import React from 'react';


export default function HowItWorks() {
const steps = [
{ title: 'Sign up', desc: 'Complete the child assessment (10-15 minutes).' },
{ title: 'Analysis', desc: 'Automated analysis + expert review.' },
{ title: 'Report', desc: 'Receive report with recommendations & follow-up plan.' },
];


return (
<section className="py-12 bg-indigo-50">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-xl font-bold">How It Works</h3>
<div className="mt-6 grid md:grid-cols-3 gap-6">
{steps.map((s, i) => (
<div key={i} className="p-6 bg-white rounded-lg shadow">
<div className="text-lg font-bold">{s.title}</div>
<div className="mt-2 text-slate-600">{s.desc}</div>
</div>
))}
</div>
</div>
</section>
);
}