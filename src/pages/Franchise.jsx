import React from 'react';


export default function Franchise() {
return (
<section className="py-12 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-xl font-bold">Franchisee Opportunities</h3>
<div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
<div className="p-4 rounded-lg border">State Franchisee</div>
<div className="p-4 rounded-lg border">District Franchisee</div>
<div className="p-4 rounded-lg border">Unit Franchisee</div>
<div className="p-4 rounded-lg border">EEC</div>
</div>
<div className="mt-4 text-slate-600">Interested in partnering? <a href="/contact" className="text-indigo-600 font-semibold">Contact us</a> to receive the franchise brochure.</div>
</div>
</section>
);
}