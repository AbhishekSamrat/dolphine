import React from 'react';


export default function Resources() {
return (
<section className="py-12">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-xl font-bold">Resource Centre</h3>
<p className="mt-3 text-slate-600">Guides, sample reports, articles and recommended books to help parents support their child's growth.</p>


<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="p-4 bg-white rounded-lg shadow">Sample Report (PDF)</div>
<div className="p-4 bg-white rounded-lg shadow">Parent Guide: Supporting Learning</div>
<div className="p-4 bg-white rounded-lg shadow">Career Paths: Quick Look</div>
</div>
</div>
</section>
);
}