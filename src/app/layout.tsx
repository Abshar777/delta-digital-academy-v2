import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import IndexLayout from "@/components/layout/indexLayout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Delta&nbsp;Digital&nbsp;Academy | Dubai's Best Digital Marketing Academy",
  description:
    "Building The Future Marketing Leaders. Dubai's Top Digital Marketing Academy offering world-class training, mentorship, and placement support.",
  keywords: [
    "Digital Marketing Academy Dubai",
    "Delta Digital Academy",
    "Digital Marketing Course Dubai",
    "Digital Marketing Training UAE",
    "SEO Course Dubai",
    "Google Ads Training",
    "Social Media Marketing Course",
    "Best Digital Marketing Institute Dubai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} relative antialiased`}
      >
        <IndexLayout>{children}</IndexLayout>
      </body>
    </html>
  );
}
