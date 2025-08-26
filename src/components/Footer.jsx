import React from 'react';


export default function Footer() {
return (
<footer className="py-8 bg-slate-900 text-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm">© {new Date().getFullYear()} Dolphin. All rights reserved.</div>
<div className="flex items-center gap-4 text-sm">
<a href="#privacy" className="opacity-80 hover:opacity-100">Privacy</a>
<a href="#terms" className="opacity-80 hover:opacity-100">Terms</a>
</div>
</div>
</footer>
);
}