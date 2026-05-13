import Image from "next/image";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "General Health Check",
    description: "Comprehensive wellness exams to keep your pet healthy year-round with early disease detection.",
    price: "₹500",
    tag: "Most Popular",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Vaccinations",
    description: "Full vaccination schedules for dogs, cats, and other pets against core and lifestyle diseases.",
    price: "₹800",
    tag: "Recommended",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Surgery & Procedures",
    description: "Advanced surgical care including spay/neuter, orthopaedic, and soft-tissue procedures.",
    price: "From ₹3,000",
    tag: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Diagnostics & Lab Tests",
    description: "In-house laboratory diagnostics including blood panels, urinalysis, X-rays, and ultrasound.",
    price: "From ₹700",
    tag: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Dental Care",
    description: "Professional dental cleaning, polishing, and oral health assessments for fresher breath.",
    price: "₹1,500",
    tag: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Emergency Care",
    description: "24/7 emergency services for critical conditions, trauma, and acute illness episodes.",
    price: "₹2,000",
    tag: "24/7",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
            Comprehensive Pet Healthcare
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From routine check-ups to advanced surgical care, we provide everything your pet needs under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-700 transition-colors">
                  {service.icon}
                </div>
                {service.tag && (
                  <span className="text-xs font-semibold bg-blue-700 text-white px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-blue-700 font-bold text-lg">{service.price}</span>
                <span className="text-xs text-slate-400 font-medium">Per visit</span>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Images Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/service-1.jpg" alt="Vet examining a pet" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Gentle Care for Every Patient</p>
            </div>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/service-2.jpg" alt="Modern vet clinic equipment" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">State-of-the-Art Facilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
