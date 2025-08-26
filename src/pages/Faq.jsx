import React from 'react';


export default function Faq() {
const items = [
{ q: 'How long does the assessment take?', a: 'About 10-15 minutes for the child questionnaire.' },
{ q: 'What does the report cover?', a: 'Abilities, learning style, career fit, and practical next steps.' },
{ q: 'Is my child too young?', a: 'We recommend ages 10+ for most actionable insights.' },
{ q: 'How is privacy handled?', a: 'All data is stored securely and never shared without consent.' },
];


return (
<section className="py-12 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-xl font-bold">Frequently Asked Questions</h3>
<div className="mt-6 grid md:grid-cols-2 gap-4">
{items.map((it, i) => (
<div key={i} className="p-4 bg-white rounded-lg shadow">
<div className="font-medium">{it.q}</div>
<div className="mt-2 text-slate-600 text-sm">{it.a}</div>
</div>
))}
</div>
</div>
</section>
);
}