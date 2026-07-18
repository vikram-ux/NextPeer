import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/sections/blog/BlogHero";
import FeaturedArticle from "@/components/sections/blog/FeaturedArticle";
import CategoryGrid from "@/components/sections/blog/CategoryGrid";
import LatestArticles from "@/components/sections/blog/LatestArticles";
import NewsletterCTA from "@/components/sections/blog/NewsletterCTA";

export const metadata: Metadata = {
  title: "Blog | NextPeer",
  description:
    "Actionable insights on programming, AI, career growth, interview preparation, and industry trends from the mentors at NextPeer.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <FeaturedArticle />
        <CategoryGrid />
        <LatestArticles />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
