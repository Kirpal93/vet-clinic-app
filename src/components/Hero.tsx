"use client";

import { useState } from "react";
import Image from "next/image";
import { getAppointmentApiUrl } from "@/lib/appointment-api-url";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Hero() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [devMockSuccess, setDevMockSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    try {
      const url = getAppointmentApiUrl();
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "same-origin",
        cache: "no-store",
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; devMock?: boolean };
      if (res.ok) {
        setDevMockSuccess(Boolean(data.devMock));
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error ?? `Request failed (${res.status}). Try calling us instead.`);
      }
    } catch (err) {
      setStatus("error");
      const raw = err instanceof Error ? err.message : String(err);
      const lower = raw.toLowerCase();
      if (
        lower.includes("failed to fetch") ||
        lower.includes("could not be resolved") ||
        lower.includes("networkerror") ||
        lower.includes("load failed")
      ) {
        setErrorMessage(
          "Your browser could not reach the booking server. Try: (1) Open the site in Chrome or Edge at http://127.0.0.1:3000 with `npm run dev` running, (2) Turn off ad-blockers for this site (they sometimes block booking URLs), (3) Avoid the Simple Browser / web preview only—use a normal browser tab."
        );
      } else {
        setErrorMessage(raw || "Network error. Check your connection or call us directly.");
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero-1.jpg"
          alt="Veterinary care background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-100 text-sm font-medium">Now Accepting New Patients</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Caring for Your <span className="text-emerald-300">Beloved</span> Pets Like Family
          </h1>
          <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-lg">
            Expert, compassionate veterinary care in the heart of Vaishali, Ghaziabad. 
            Trusted by thousands of pet families across the region.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Experienced Veterinarians
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Modern Equipment
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Emergency Services
            </div>
          </div>
        </div>

        {/* Right: Appointment Form */}
        <div id="contact" className="bg-white rounded-2xl shadow-2xl p-8 scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-green-900">Book an Appointment</h2>
            <p className="text-slate-500 text-sm mt-1">Fill the form and we&apos;ll get back to you shortly.</p>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Message Sent!</h3>
              <p className="text-slate-500 text-sm">We&apos;ll contact you within 24 hours to confirm your appointment.</p>
              {devMockSuccess && (
                <p className="text-amber-800 text-xs max-w-sm bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-left">
                  Local dev: email was not sent (this PC cannot reach api.resend.com — often corporate firewall or SSL inspection). Your request was{" "}
                  <strong>printed in the terminal</strong> where <code className="font-mono">npm run dev</code> runs. On Vercel, real email usually works. Optional: set{" "}
                  <code className="font-mono">RESEND_DEV_MOCK=1</code> to skip Resend on purpose, or ask IT for <code className="font-mono">NODE_EXTRA_CA_CERTS</code> if you use a proxy.
                </p>
              )}
              <button
                onClick={() => {
                  setStatus("idle");
                  setErrorMessage(null);
                  setDevMockSuccess(false);
                }}
                className="mt-2 text-green-700 underline text-sm hover:text-green-900"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Message / Reason for Visit
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your pet's condition or the reason for your visit..."
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                />
              </div>
              {status === "error" && (
                <p className="text-red-600 text-sm rounded-lg bg-red-50 border border-red-100 px-3 py-2">
                  {errorMessage ?? "Something went wrong. Please try again or call us directly."}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-semibold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
