import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { TRENDING_TOPICS, FREE_RESOURCES } from "@/data/blog";

export default function BlogSidebar() {
  return (
    <aside className="flex flex-col gap-6">
      {/* Trending Topics */}
      <div className="rounded-xl border border-slate-100 bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
          Trending Topics
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {TRENDING_TOPICS.map((topic) => (
            <Link
              key={topic.label}
              href={`/blog/tag/${topic.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              {topic.label}
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
        >
          Explore All Topics
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Student Success Stories */}
      <div className="rounded-xl border border-slate-100 bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
          Student Success Stories
        </h3>
        <p className="mt-3 text-sm font-semibold text-slate-800">
          From beginner to placed!
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          Read how NextPeer learners landed internships and full-time
          opportunities.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            {["bg-blue-200", "bg-amber-200", "bg-rose-200"].map((c, i) => (
              <div
                key={i}
                className={`h-8 w-8 rounded-full border-2 border-white ${c}`}
              />
            ))}
          </div>
          <Link
            href="/success-stories"
            className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
          >
            Read Success Stories
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Free Resources */}
      <div className="rounded-xl border border-slate-100 bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
          Free Resources
        </h3>
        <ul className="mt-4 space-y-3">
          {FREE_RESOURCES.map((res) => {
            const Icon = res.icon;
            return (
              <li key={res.label}>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm text-slate-600 hover:text-blue-600"
                >
                  <span className="flex items-center gap-2">
                    <Icon size={15} className="text-slate-400" />
                    {res.label}
                  </span>
                  <Download size={14} className="text-slate-400" />
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="#"
          className="mt-4 flex items-center justify-center rounded-lg border border-slate-200 py-2 text-sm font-semibold text-blue-600 hover:border-blue-300"
        >
          View All Resources
        </Link>
      </div>
    </aside>
  );
}
