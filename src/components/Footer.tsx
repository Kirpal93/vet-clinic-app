export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-950 text-red-100 pb-20 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-red-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight">PawCare</span>
                <span className="block text-[10px] text-red-400 font-medium tracking-widest uppercase -mt-1">Vet Clinic</span>
              </div>
            </div>
            <p className="text-red-300 text-sm leading-relaxed">
              Trusted veterinary care for your beloved pets in Vaishali, Ghaziabad. 
              Caring for animals since 2010.
            </p>
            <div className="flex gap-3 mt-4">
              {["facebook", "instagram", "twitter", "whatsapp"].map((s) => (
                <a key={s} href="#" aria-label={s} className="w-8 h-8 rounded-full bg-red-800 hover:bg-red-600 flex items-center justify-center transition-colors">
                  <span className="sr-only">{s}</span>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Testimonials", "Location", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-red-300 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "General Health Check",
                "Vaccinations",
                "Surgery & Procedures",
                "Diagnostics & Lab Tests",
                "Dental Care",
                "Emergency Care",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-red-300 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-red-300">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Vaishali Sector-1, Ghaziabad UP 201010</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:9958436981" className="hover:text-white transition-colors">+91 99584 36981</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@pawcarevetclinic.com" className="hover:text-white transition-colors">
                  info@pawcarevetclinic.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-red-400">
          <p>© {currentYear} PawCare Vet Clinic. All rights reserved.</p>
          <p>Designed with care for pets and their families.</p>
        </div>
      </div>
    </footer>
  );
}
