import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://clipslawncare.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Lawn Care & Landscaping in Bend, OR | Clips Lawn Care",
  description: "Residential and commercial lawn maintenance, landscape projects, and property care for Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  keywords: "lawn care Bend Oregon, lawn care Redmond Oregon, lawn care Central Oregon, landscaping Bend Oregon, commercial landscaping Bend Oregon, HOA landscaping Bend Oregon, lawn maintenance Bend Oregon, landscape installation Central Oregon",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Clips Lawn Care",
    title: "Lawn Care & Landscaping in Bend, OR | Clips Lawn Care",
    description: "Residential and commercial lawn maintenance, landscape projects, and property care for Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
    images: [{ url: "/logo.png" }],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Clips Lawn Care LLC",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  telephone: "+15413058500",
  email: "clipslawncarebend@gmail.com",
  areaServed: [
    { "@type": "City", name: "Bend, OR" },
    { "@type": "City", name: "Redmond, OR" },
    { "@type": "City", name: "Sunriver, OR" },
    { "@type": "City", name: "Prineville, OR" },
    { "@type": "City", name: "Powell Butte, OR" },
    { "@type": "City", name: "La Pine, OR" },
  ],
  sameAs: [
    "https://www.facebook.com/share/14w4V8fcG2f/?mibextid=wwXIfr",
    "https://www.instagram.com/clipslawncarebend",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
