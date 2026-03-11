import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Consulting & Advisory for Spanish SMEs | Innova",
  description: "Expert multidisciplinary consulting for Spanish businesses. Legal, financial, and business advisory solutions tailored for SMEs and entrepreneurs. 15+ years experience.",
  keywords: "business consulting Spain, legal compliance advisory, financial consulting SME, regulatory compliance, business advisory Madrid",
  metadataBase: new URL("https://innovaconsulting.es"),
  alternates: {
    canonical: "https://innovaconsulting.es",
  },
  openGraph: {
    title: "Business Consulting Excellence for Spanish Enterprises",
    description: "Transform your business with expert legal, financial, and strategic advisory from Innova Consulting.",
    url: "https://innovaconsulting.es",
    siteName: "Innova Consulting Empresarial SL",
    type: "website",
    images: [
      {
        url: "https://innovaconsulting.es/og-image.jpg",
        alt: "Innova Consulting - Professional Business Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Consulting for Spanish SMEs | Innova",
    description: "Expert multidisciplinary consulting: legal, financial, and business advisory.",
    images: ["https://innovaconsulting.es/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${publicSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}