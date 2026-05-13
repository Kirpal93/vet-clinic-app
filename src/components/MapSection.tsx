export default function MapSection() {
  return (
    <section id="location" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">Our Location</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Conveniently located in Vaishali Sector-1, easily accessible from all parts of Ghaziabad and Noida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Address</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Vaishali Sector-1<br />
                    Ghaziabad, UP 201010<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Opening Hours</h3>
                  <div className="text-sm text-slate-600 space-y-1">
                    <div className="flex justify-between gap-8">
                      <span>Mon – Fri</span><span className="font-medium">9:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday</span><span className="font-medium">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span><span className="font-medium">10:00 AM – 2:00 PM</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-blue-100">
                      <span className="text-blue-700 font-semibold">Emergency: 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Contact</h3>
                  <a href="tel:9958436981" className="text-blue-700 font-semibold text-sm hover:underline block">
                    +91 99584 36981
                  </a>
                  <a href="mailto:info@pawcarevetclinic.com" className="text-slate-600 text-sm hover:text-blue-700 transition-colors block mt-0.5">
                    info@pawcarevetclinic.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[450px]">
            <iframe
              title="PawCare Vet Clinic Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.3200%2C28.6400%2C77.3600%2C28.6700&layer=mapnik&marker=28.6450%2C77.3350"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Directions CTA */}
        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps/search/Vaishali+Sector-1+Ghaziabad+UP+201010"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Get Directions on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
