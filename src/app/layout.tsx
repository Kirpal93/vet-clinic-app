import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PawCare Vet Clinic | Trusted Family Veterinary Care in Ghaziabad",
  description:
    "Professional veterinary care for your beloved pets. Serving Ghaziabad & Vaishali since 2010. Book an appointment today.",
  keywords: "vet clinic, veterinary, pet care, Ghaziabad, Vaishali, dog vet, cat vet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
