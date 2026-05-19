import Image from "next/image";

const stats = [
  { value: "15+", label: "वर्षों का अनुभव" },
  { value: "8,000+", label: "खुश मरीज" },
  { value: "5", label: "विशेषज्ञ पशु चिकित्सक" },
  { value: "24/7", label: "आपातकालीन सहायता" },
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
                alt="PawCare वेट क्लिनिक टीम"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700 text-sm">विश्वसनीय क्लिनिक</span>
              </div>
              <p className="text-2xl font-extrabold text-green-900">4.9 / 5</p>
              <p className="text-xs text-slate-500 mt-0.5">500+ समीक्षाओं पर आधारित</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-green-100 rounded-full -z-10" />
          </div>

          {/* Text Column */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              हमारे बारे में
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-6">
              आपके पालतू जानवर का स्वास्थ्य हमारी <span className="text-emerald-500">प्राथमिकता</span> है
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              PawCare वेट क्लिनिक 15 से अधिक वर्षों से वैशाली और गाज़ियाबाद के परिवारों की सेवा कर रहा है। 
              हमारी समर्पित पशु चिकित्सकों और सहायक कर्मचारियों की टीम हर मरीज के साथ अपने पालतू जानवर की तरह व्यवहार करती है — 
              गर्मजोशी, सटीकता और चिकित्सा देखभाल के उच्चतम मानकों के साथ।
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              हम उन्नत नैदानिक तकनीक को दयालु दृष्टिकोण के साथ जोड़ते हैं, यह सुनिश्चित करते हुए कि आपके पालतू जानवर को 
              एक शांत, स्वागत करने वाले वातावरण में सर्वोत्तम उपचार मिले। पिल्लों और बिल्ली के बच्चों से लेकर वरिष्ठ पालतू जानवरों 
              तक, हम आपके पशु के जीवन के हर चरण की देखभाल करते हैं।
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center bg-slate-50 rounded-xl p-4">
                  <p className="text-2xl font-extrabold text-green-700">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3 flex-1 min-w-[160px]">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">सोम – शनि</p>
                  <p className="text-xs text-slate-500">सुबह 9:00 – शाम 8:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3 flex-1 min-w-[160px]">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">आपातकाल</p>
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
