import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <Link
            href="/success-stories"
            className="hidden items-center gap-1 text-sm font-semibold text-blue-600 hover:underline sm:flex"
          >
            View More Stories
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.placement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/success-stories"
          className="mt-6 flex items-center justify-center gap-1 text-sm font-semibold text-blue-600 hover:underline sm:hidden"
        >
          View More Stories
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
