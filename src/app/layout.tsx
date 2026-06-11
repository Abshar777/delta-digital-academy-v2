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
import Script from "next/script";

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
  title: "Professional Digital Marketing Courses in Dubai | Online & Offline Classes",
  description:
    "Our digital marketing courses in Dubai are designed to help you master in-demand skills and build a successful career in the digital industry. Delta Digital Academy offers both offline and online marketing courses in Dubai, giving students the flexibility to learn from anywhere or experience classroom-based training with expert mentors.",
  keywords: [
    "digital marketing courses in Dubai",
    "online marketing courses in Dubai",
    "search engine optimization course",
    "google ads course",
    "online learning platforms",
    "web marketing course",
    "marketing courses dubai",
    "social media marketing",
    "social media marketing course",
  ],
  verification: {
    google: "fctD9fHzgi3_GimMtFrmJM8nLYjj08ZqtWvMOviqSkA",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TH8GHZPB');`}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1531969455314925');
          fbq('track', 'PageView');`}
        </Script>
      </head>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1531969455314925&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <body
        className={` ${specialGothicExpandedOne.variable} ${poppins.variable} relative tt-magic-cursor antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TH8GHZPB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZYFELV91D4"></script>
        <script async id="google-analytics" >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZYFELV91D4');
          `}
        </script>


        <IndexLayout>{children}</IndexLayout>
      </body>
    </html>
  );
}
