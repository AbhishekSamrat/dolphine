import React from 'react';


export default function Purchase() {
return (
<section className="py-12 bg-gradient-to-r from-white via-indigo-50 to-white">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
<div className="p-6 bg-white rounded-lg shadow">
<h3 className="text-xl font-bold">Obtain the DEM Scan Report</h3>
<p className="mt-3 text-slate-600">Purchase the comprehensive DEM Scan Report and receive an easy-to-follow action plan for your child.</p>


<ul className="mt-4 list-disc list-inside text-slate-600">
<li>Instant downloadable report</li>
<li>Follow-up consultation (optional)</li>
<li>Discounted bundle for siblings</li>
</ul>


<div className="mt-6">
<label className="block text-sm font-medium">Your email</label>
<input type="email" placeholder="parent@example.com" className="mt-2 w-full rounded-md border px-3 py-2" />
<div className="mt-4 flex gap-3">
<button className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold">Buy Now</button>
<button className="px-5 py-2 rounded-lg border">Request Brochure</button>
</div>
</div>
</div>


<div className="p-6">
<h4 className="font-semibold">Contact Us</h4>
<p className="text-slate-600 mt-2">Have questions or need support? Reach out and our team will help you choose the best option for your child.</p>


<div className="mt-4 space-y-2 text-sm text-slate-700">
<div>Phone: +91 7977693348</div>
<div>Email: info@demscan.example</div>
<div>Address: 302, Arihant Royal, Vaishali Nagar</div>
</div>
</div>
</div>
</section>
);
}