import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing Course in Dubai | Delta Digital Academy",
  description:
    "Master Google Ads, Meta Ads & GA4 with Dubai's hands-on Performance Marketing Course. Live projects, expert trainers, certification. Enroll today.",
  keywords: [
    "Performance Marketing Course in Dubai",
    "PPC course Dubai",
    "Google Ads course Dubai",
    "Meta Ads training Dubai",
    "digital marketing courses in Dubai",
    "paid media course Dubai",
    "performance marketing training UAE",
    "Google Analytics 4 course Dubai",
    "online performance marketing course",
    "Delta Digital Academy performance marketing",
    "media buyer course Dubai",
    "campaign management course Dubai",
  ],
  authors: [{ name: "Delta Digital Academy", url: "https://deltadigitalacademy.com" }],
  creator: "Delta Digital Academy",
  publisher: "Delta Digital Academy",
  category: "Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://deltadigitalacademy.com/performance-marketing-course",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://deltadigitalacademy.com/performance-marketing-course",
    siteName: "Delta Digital Academy",
    title: "Performance Marketing Course in Dubai | Delta Digital Academy",
    description:
      "Master Google Ads, Meta Ads & GA4 with Dubai's hands-on Performance Marketing Course. Live projects, expert trainers, certification. Enroll today.",
    images: [
      {
        url: "https://deltadigitalacademy.com/og-performance-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Performance Marketing Course in Dubai – Delta Digital Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Course in Dubai | Delta Digital Academy",
    description:
      "Master Google Ads, Meta Ads & GA4 with Dubai's hands-on Performance Marketing Course. Live projects, expert trainers, certification. Enroll today.",
    images: ["https://deltadigitalacademy.com/og-performance-marketing.jpg"],
    creator: "@deltadigitalae",
    site: "@deltadigitalae",
  },
};

export default function PerformanceMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Performance Marketing Course in Dubai",
            description:
              "A comprehensive performance marketing course covering Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, GA4, GTM, and AI marketing tools. Available online and offline in Dubai.",
            provider: {
              "@type": "Organization",
              name: "Delta Digital Academy",
              sameAs: "https://deltadigitalacademy.com",
            },
            url: "https://deltadigitalacademy.com/performance-marketing-course",
            image: "https://deltadigitalacademy.com/og-performance-marketing.jpg",
            inLanguage: "en",
            offers: {
              "@type": "Offer",
              category: "Paid",
              availability: "https://schema.org/InStock",
              validFrom: "2025-01-01",
              url: "https://deltadigitalacademy.com/performance-marketing-course",
            },
            educationalLevel: "Beginner to Advanced",
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                courseMode: "Blended",
                location: {
                  "@type": "Place",
                  name: "Delta Digital Academy – Dubai",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "M09, Al Shaibani Building, Near Al Qiyada Metro Station, Abu Hail",
                    addressLocality: "Dubai",
                    addressCountry: "AE",
                  },
                },
              },
              {
                "@type": "CourseInstance",
                courseMode: "Online",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
