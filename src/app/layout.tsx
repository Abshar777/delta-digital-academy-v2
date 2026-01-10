import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import "./globals.css";
import IndexLayout from "@/components/layout/indexLayout";
import { Inter } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const specialGothicExpandedOne = Special_Gothic_Expanded_One({
  variable: "--font-special-gothic-expanded-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Delta Digital Academy",
  description:
    "Best Digital Marketing Academy in Dubai,Building The Future Marketing Leaders, Dubai's Top Digital Marketing Academy",
  keywords: [
    "Digital Marketing",
    "Marketing",
    "Digital Marketing Academy",
    "Dubai",
    "Marketing Leaders",
    "Dubai's Top Digital Marketing Academy",
    // add some keywords
    "Delta Digital Academy",
    "Digital Marketing Academy",
    "Digital Marketing Course",
    "Digital Marketing Courses",
    "Digital Marketing Courses Dubai",
    "Digital Marketing Courses in Dubai",
    "Digital Marketing Courses in Dubai UAE",
    "Digital Marketing Courses in Dubai UAE Online",
    "Digital Marketing Courses in Dubai UAE Offline",
    "Digital Marketing Courses in Dubai UAE Online and Offline",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement and Job Guarantee and Placement Support and Job Placement and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support and Job Placement Support",
    "Digital Marketing Courses in Dubai UAE Online and Offline with Certificate and Placement",
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
        className={` ${specialGothicExpandedOne.variable} ${poppins.variable} relative antialiased`}
      >
        <IndexLayout>{children}</IndexLayout>
      </body>
    </html>
  );
}
