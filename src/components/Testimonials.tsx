
const testimonials = [
  {
    name: "प्रिया शर्मा",
    location: "वैशाली, गाज़ियाबाद",
    initials: "प्र",
    avatarColor: "bg-rose-400",
    rating: 5,
    text: "PawCare हमारे कुत्ते Bruno के लिए एक वरदान रहा है। डॉक्टर बहुत धैर्यवान और जानकार हैं। उन्होंने सब कुछ स्पष्ट रूप से समझाया और सुनिश्चित किया कि Bruno पूरे समय आरामदायक रहे। अत्यधिक अनुशंसित!",
    pet: "कुत्ते के मालिक",
  },
  {
    name: "राहुल मेहता",
    location: "सेक्टर-3, वैशाली",
    initials: "रा",
    avatarColor: "bg-blue-500",
    rating: 5,
    text: "जब हमारी बिल्ली बीमार पड़ी तो हम देर रात यहां दौड़े आए। आपातकालीन प्रतिक्रिया अविश्वसनीय थी — कर्मचारी गर्मजोशी वाले, कुशल और सच में परवाह करने वाले थे। हमारी Mittens इस अद्भुत टीम की बदौलत फिर से चंचल हो गई है!",
    pet: "बिल्ली के मालिक",
  },
  {
    name: "अंजलि गुप्ता",
    location: "इंदिरापुरम, गाज़ियाबाद",
    initials: "अं",
    avatarColor: "bg-violet-500",
    rating: 5,
    text: "साफ सुविधाएं, पारदर्शी मूल्य निर्धारण, और उत्कृष्ट देखभाल। डॉ. सिंह ने मेरे खरगोश के आहार और स्वास्थ्य के बारे में सभी सवालों के जवाब देने में समय लिया। यह क्लिनिक वास्तव में आपके पालतू जानवरों के साथ परिवार जैसा व्यवहार करती है।",
    pet: "खरगोश के मालिक",
  },
  {
    name: "विक्रम नायर",
    location: "क्रॉसिंग्स रिपब्लिक",
    initials: "वि",
    avatarColor: "bg-amber-500",
    rating: 5,
    text: "3 साल से दोनों कुत्तों को यहां ला रहा हूं। टीकाकरण की याद दिलाना, फॉलो-अप कॉल और व्यक्तिगत देखभाल PawCare को हर उस क्लिनिक से अलग करती है जो मैंने आजमाई है। हर रुपये की कीमत है!",
    pet: "कुत्ते के मालिक",
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-slate-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            समीक्षाएं
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-4">
            पालतू माता-पिता हमारे बारे में क्या कहते हैं
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            हजारों परिवार अपने पालतू जानवर के स्वास्थ्य के लिए PawCare पर भरोसा करते हैं। यहां वे क्या कहते हैं।
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-slate-600 font-semibold">500+ समीक्षाओं का 4.9 औसत</span>
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
              <svg className="w-8 h-8 text-green-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{t.text}</p>

              <div>
                <StarRating count={t.rating} />
                <div className="flex items-center gap-3 mt-4">
                  <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center shrink-0 border-2 border-white shadow-sm`}>
                    <span className="text-white text-sm font-bold">{t.initials}</span>
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
