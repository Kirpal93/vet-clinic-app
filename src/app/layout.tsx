import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  title: "PawCare वेट क्लिनिक | गाज़ियाबाद में विश्वसनीय पारिवारिक पशु चिकित्सा देखभाल",
  description:
    "आपके प्रिय पालतू जानवरों के लिए पेशेवर पशु चिकित्सा देखभाल। 2010 से गाज़ियाबाद और वैशाली की सेवा। आज ही अपॉइंटमेंट बुक करें।",
  keywords: "पशु क्लिनिक, पशु चिकित्सा, पालतू देखभाल, गाज़ियाबाद, वैशाली, कुत्ता डॉक्टर, बिल्ली डॉक्टर",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className={`${inter.className} ${notoSansDevanagari.variable}`}>{children}</body>
    </html>
  );
}
