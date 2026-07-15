import Link from "next/link";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { ABOUT_CTA_PILLS } from "@/data/about";

const CTA_LINES = [
  "Your future starts with one decision.",
  "Learn practical skills.",
  "Build real projects.",
  "Unlock career opportunities.",
];

export default function AboutCTA() {
  return (
    <section className="bg-slate-50 pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-blue-950 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
          {/* Left copy */}
          <div>
            <p className="text-2xl font-extrabold text-white sm:text-3xl">
              Join the Next Generation of Learners
            </p>
            <ul className="mt-4 space-y-1.5">
              {CTA_LINES.map((line) => (
                <li
                  key={line}
                  className="flex items-center gap-2 text-sm text-blue-100"
                >
                  <CheckCircle2 size={14} className="shrink-0 text-blue-300" />
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href="/programs"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
            >
              Start Learning Today
            </Link>
          </div>

          {/* Right visual */}
          <div className="relative flex items-center justify-center">
            <div className="flex aspect-[4/3] w-full max-w-sm items-center justify-center rounded-2xl bg-blue-900/60">
              <GraduationCap className="h-16 w-16 text-blue-200" strokeWidth={1.25} />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-2 px-2 sm:right-0 sm:bottom-auto sm:top-1/2 sm:w-40 sm:-translate-y-1/2 sm:flex-col">
              {ABOUT_CTA_PILLS.map((pill) => {
                const Icon = pill.icon;
                return (
                  <span
                    key={pill.label}
                    className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur"
                  >
                    <Icon size={13} />
                    {pill.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Welcome to <span className="font-semibold text-blue-600">NextPeer</span> — Learn. Build. Grow.
        </p>
      </div>
    </section>
  );
}
