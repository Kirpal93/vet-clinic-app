import Image from "next/image";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "8,000+", label: "Happy Patients" },
  { value: "5", label: "Expert Veterinarians" },
  { value: "24/7", label: "Emergency Support" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-2.jpg"
                alt="PawCare Vet Clinic team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700 text-sm">Trusted Clinic</span>
              </div>
              <p className="text-2xl font-extrabold text-red-900">4.9 / 5</p>
              <p className="text-xs text-slate-500 mt-0.5">Based on 500+ reviews</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-red-100 rounded-full -z-10" />
          </div>

          {/* Text Column */}
          <div>
            <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-red-900 mb-6">
              Your Pet&apos;s Health Is Our <span className="text-rose-500">Priority</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              PawCare Vet Clinic has been serving the families of Vaishali and Ghaziabad for over 15 years. 
              Our team of dedicated veterinarians and support staff treat every patient like their own pet — 
              with warmth, precision, and the highest standards of medical care.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We combine advanced diagnostic technology with a compassionate approach, ensuring your pet 
              receives the best possible treatment in a calm, welcoming environment. From puppies and kittens 
              to senior pets, we care for every stage of your animal&apos;s life.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center bg-slate-50 rounded-xl p-4">
                  <p className="text-2xl font-extrabold text-red-700">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-red-50 rounded-xl p-3 flex-1 min-w-[160px]">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Mon – Sat</p>
                  <p className="text-xs text-slate-500">9:00 AM – 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-red-50 rounded-xl p-3 flex-1 min-w-[160px]">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Emergency</p>
                  <p className="text-xs text-slate-500">+91 99584 36981</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
