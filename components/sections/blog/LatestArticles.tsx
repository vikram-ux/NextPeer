import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LATEST_ARTICLES } from "@/data/blog";
import ArticleCard from "./ArticleCard";
import BlogSidebar from "./BlogSidebar";

export default function LatestArticles() {
  return (
    <section id="latest-articles" className="bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Articles grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Latest Articles
              </h2>
              <Link
                href="/blog"
                className="hidden items-center gap-1 text-sm font-semibold text-blue-600 hover:underline sm:flex"
              >
                View All Articles
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {LATEST_ARTICLES.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
}
