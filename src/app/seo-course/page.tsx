import type { Metadata } from "next";
import SeoCourseContent from "./SeoCourseContent";

export const metadata: Metadata = {
  title: "Search Engine Optimization Course in Dubai | Delta Digital Academy",
  description:
    "Join the best SEO course in Dubai at Delta Digital Academy. Learn Search Engine Optimization with hands-on projects, live training sessions and expert mentors. Online & Offline classes available.",
  keywords: [
    "SEO course in Dubai",
    "search engine optimization course Dubai",
    "best SEO training Dubai",
    "digital marketing courses in Dubai",
    "online SEO course Dubai",
    "SEO classes Dubai",
    "learn SEO Dubai",
    "Delta Digital Academy SEO",
  ],
};

export default function SeoCoursePage() {
  return <SeoCourseContent />;
}
