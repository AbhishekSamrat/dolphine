import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

// Tailwind-styled Register component (single-file React component)
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    motherName: "",
    fatherName: "",
    lastName: "",
    dob: "",
    timeOfBirth: "",
    placeOfBirth: "",
    address: "",
    pincode: "",
    contactNo: "",
    email: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Full name is required.";
    if (!form.email) err.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Enter a valid email.";
    if (!form.dob) err.dob = "Date of birth is required.";
    if (!form.termsAccepted) err.termsAccepted = "You must accept terms.";
    if (form.contactNo && !/^\d{7,15}$/.test(form.contactNo)) err.contactNo = "Enter a valid contact number (7–15 digits).";
    if (form.pincode && !/^\d{4,10}$/.test(form.pincode)) err.pincode = "Enter a valid pincode.";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) return setErrors(err);

    setLoading(true);
    try {
      const res = await registerUser(form);
      navigate(`/payment/${res.data.user._id}`);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500">Fill the details below to register — it only takes a minute.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-slate-600">Full name *</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                placeholder="e.g. Rahul Sharma"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </label>

            <label className="block">
              <span className="text-sm text-slate-600">Last name</span>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Surname"
              />
            </label>

            <label className="block">
              <span className="text-sm text-slate-600">Mother's name</span>
              <input name="motherName" value={form.motherName} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Mother's full name" />
            </label>

            <label className="block">
              <span className="text-sm text-slate-600">Father's name</span>
              <input name="fatherName" value={form.fatherName} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Father's full name" />
            </label>

            <label className="block">
              <span className="text-sm text-slate-600">Date of birth *</span>
              <input name="dob" value={form.dob} onChange={handleChange} type="date" required className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.dob ? 'border-red-300' : 'border-gray-200'}`} />
              {errors.dob && <p className="mt-1 text-xs text-red-600">{errors.dob}</p>}
            </label>

        <input
  name="timeOfBirth"
  value={form.timeOfBirth}
  onChange={handleChange}
  type="time"                 // changed from text to time here
  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  placeholder="HH:MM"
/>

            <label className="block sm:col-span-2">
              <span className="text-sm text-slate-600">Place of birth</span>
              <input name="placeOfBirth" value={form.placeOfBirth} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="City, State" />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm text-slate-600">Address</span>
              <input name="address" value={form.address} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Street, locality, landmark" />
            </label>

            <label className="block">
              <span className="text-sm text-slate-600">Pincode</span>
              <input name="pincode" value={form.pincode} onChange={handleChange} inputMode="numeric" pattern="\d*" className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="e.g. 400001" />
              {errors.pincode && <p className="mt-1 text-xs text-red-600">{errors.pincode}</p>}
            </label>

            <label className="block">
              <span className="text-sm text-slate-600">Contact No</span>
              <input name="contactNo" value={form.contactNo} onChange={handleChange} inputMode="tel" className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.contactNo ? 'border-red-300' : 'border-gray-200'}`} placeholder="Mobile or phone number" />
              {errors.contactNo && <p className="mt-1 text-xs text-red-600">{errors.contactNo}</p>}
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm text-slate-600">Email *</span>
              <input name="email" value={form.email} onChange={handleChange} type="email" required className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.email ? 'border-red-300' : 'border-gray-200'}`} placeholder="you@example.com" />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </label>
          </div>

          <div className="flex items-start gap-3">
            <label className="relative flex items-center">
              <input name="termsAccepted" type="checkbox" checked={form.termsAccepted} onChange={handleChange} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-sm text-slate-600">I accept the <a href="#" className="text-indigo-600 underline">terms & conditions</a>.</span>
            </label>
            {errors.termsAccepted && <p className="text-xs text-red-600">{errors.termsAccepted}</p>}
          </div>

          <div className="flex items-center justify-between gap-4">
            <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-60">
              {loading ? 'Registering...' : 'Register'}
            </button>

            <button type="button" onClick={() => navigate(-1)} className="text-sm text-slate-600 underline">Cancel</button>
          </div>
        </form>

        <p className="mt-6 text-xs text-slate-500">By registering you agree to our policies. We respect your privacy.</p>
      </div>
    </div>
  );
}
