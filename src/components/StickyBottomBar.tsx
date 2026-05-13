"use client";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-700 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <p className="text-white font-medium text-sm sm:text-base">
          📅 Ready to care for your pet? Call to make an appointment!
        </p>
        <a
          href="tel:9958436981"
          className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold text-sm sm:text-base px-6 py-2 rounded-full hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +91 99584 36981
        </a>
      </div>
    </div>
  );
}
