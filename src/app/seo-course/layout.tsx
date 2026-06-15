import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Course in Dubai | Search Engine Optimization Training | Delta Digital Academy",
  description:
    "Join the best SEO course in Dubai at Delta Digital Academy. Learn Search Engine Optimization through hands-on projects, expert mentorship, and flexible online & offline classes. Enroll today.",
  keywords: [
    "SEO course in Dubai",
    "search engine optimization course Dubai",
    "best SEO training Dubai",
    "SEO classes Dubai",
    "learn SEO Dubai",
    "digital marketing courses in Dubai",
    "online SEO course Dubai",
    "SEO certification Dubai",
    "SEO for beginners Dubai",
    "professional SEO training UAE",
    "Delta Digital Academy SEO",
    "on page SEO course",
    "technical SEO training",
    "local SEO Dubai",
    "keyword research course Dubai",
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
    canonical: "https://deltadigitalacademy.com/seo-course",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://deltadigitalacademy.com/seo-course",
    siteName: "Delta Digital Academy",
    title: "SEO Course in Dubai | Delta Digital Academy",
    description:
      "Master Search Engine Optimization with Delta Digital Academy's expert-led SEO course in Dubai. Flexible online & offline classes, hands-on projects, and career support.",
    images: [
      {
        url: "https://deltadigitalacademy.com/og-seo-course.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Course in Dubai – Delta Digital Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Course in Dubai | Delta Digital Academy",
    description:
      "Master Search Engine Optimization with Delta Digital Academy's expert-led SEO course in Dubai. Flexible online & offline classes, hands-on projects, and career support.",
    images: ["https://deltadigitalacademy.com/og-seo-course.jpg"],
    creator: "@deltadigitalae",
    site: "@deltadigitalae",
  },
};

export default function SeoCourseLayout({
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
            name: "Search Engine Optimization (SEO) Course in Dubai",
            description:
              "A comprehensive SEO course covering keyword research, on-page & technical SEO, link building, local SEO, Google Analytics, and AI tools for SEO. Available online and offline in Dubai.",
            provider: {
              "@type": "Organization",
              name: "Delta Digital Academy",
              sameAs: "https://deltadigitalacademy.com",
            },
            url: "https://deltadigitalacademy.com/seo-course",
            image: "https://deltadigitalacademy.com/og-seo-course.jpg",
            inLanguage: "en",
            offers: {
              "@type": "Offer",
              category: "Paid",
              availability: "https://schema.org/InStock",
              validFrom: "2025-01-01",
              url: "https://deltadigitalacademy.com/seo-course",
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
