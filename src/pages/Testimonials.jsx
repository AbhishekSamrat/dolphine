import React from 'react';


export default function Testimonials() {
const data = [
{ quote: 'We saw a visible change in interest and grades within 2 months.', who: 'Priya, Parent' },
{ quote: 'Report is thorough and easy to act on.', who: 'Sandeep, Parent' },
{ quote: 'The career suggestions were spot-on for our daughter.', who: 'Alka, Parent' },
];


return (
<section className="py-12">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-xl font-bold">What Parents Say</h3>
<div className="mt-6 grid md:grid-cols-3 gap-6">
{data.map((t, i) => (
<div key={i} className="p-6 bg-white rounded-lg shadow">
<div className="text-slate-700">"{t.quote}"</div>
<div className="mt-4 text-sm text-slate-500">— {t.who}</div>
</div>
))}
</div>
</div>
</section>
);
}