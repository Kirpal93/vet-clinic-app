import Image from "next/image";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Vaishali, Ghaziabad",
    image: "/images/review-1.jpg",
    rating: 5,
    text: "PawCare has been an absolute blessing for our dog Bruno. The doctors are so patient and knowledgeable. They explained everything clearly and made sure Bruno was comfortable throughout. Highly recommend!",
    pet: "Dog owner",
  },
  {
    name: "Rahul Mehta",
    location: "Sector-3, Vaishali",
    image: "/images/review-2.jpg",
    rating: 5,
    text: "We rushed here late at night when our cat fell ill. The emergency response was incredible — the staff was warm, efficient, and truly cared. Our Mittens is back to her playful self thanks to this wonderful team!",
    pet: "Cat owner",
  },
  {
    name: "Anjali Gupta",
    location: "Indirapuram, Ghaziabad",
    image: "/images/review-1.jpg",
    rating: 5,
    text: "Clean facilities, transparent pricing, and excellent care. Dr. Singh took time to answer all my questions about my rabbit's diet and health. This clinic genuinely treats your pets like family.",
    pet: "Rabbit owner",
  },
  {
    name: "Vikram Nair",
    location: "Crossings Republik",
    image: "/images/review-2.jpg",
    rating: 5,
    text: "Been bringing both my dogs here for 3 years. The vaccination reminders, follow-up calls, and personalized care set PawCare apart from every clinic I've tried. Worth every rupee!",
    pet: "Dog owner",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
            What Pet Parents Say About Us
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Thousands of families trust PawCare for their pet&apos;s health. Here&apos;s what they have to say.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-slate-600 font-semibold">4.9 average from 500+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Quote Icon */}
              <svg className="w-8 h-8 text-blue-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{t.text}</p>

              <div>
                <StarRating count={t.rating} />
                <div className="flex items-center gap-3 mt-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-100 shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.pet} · {t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
