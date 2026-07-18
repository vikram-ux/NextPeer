import Link from "next/link";
import { Clock, ArrowRight, Flag } from "lucide-react";
import { FEATURED_POST } from "@/data/blog";

export default function FeaturedArticle() {
  return (
    <section className="bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/blog/${FEATURED_POST.slug}`}
          className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6 lg:grid-cols-2 lg:items-center"
        >
          {/* Visual */}
          <div className="relative flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6">
            <div>
              <p className="text-lg font-bold leading-snug text-white">
                YOUR ROADMAP
              </p>
              <p className="text-lg font-bold leading-snug text-blue-300">
                TO SUCCESS
              </p>
            </div>
            <Flag className="h-10 w-10 self-end text-blue-300" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600">
              FEATURED
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
              {FEATURED_POST.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {FEATURED_POST.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {FEATURED_POST.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={13} />
                {FEATURED_POST.readTime}
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold text-blue-600">
                Read More
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
