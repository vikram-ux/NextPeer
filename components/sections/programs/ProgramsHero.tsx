import Link from "next/link";
import { ChevronRight, GraduationCap } from "lucide-react";
import { PROGRAM_HERO_POINTS } from "@/data/programs";

export default function ProgramsHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-slate-900">Programs</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 pb-10 lg:grid-cols-2 lg:items-center">
          {/* Left copy */}
          <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Explore Our
              <br />
              <span className="text-blue-600">Career-Focused</span> Programs
            </h1>
            <p className="mt-4 max-w-lg text-base text-slate-600">
              Industry-relevant training designed to help college students
              build skills, gain practical knowledge and get placed.
            </p>
          </div>

          {/* Right visual + points */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 sm:w-1/2">
              <GraduationCap className="h-20 w-20 text-blue-400" strokeWidth={1.25} />
            </div>

            <div className="w-full space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:w-1/2">
              {PROGRAM_HERO_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {point.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
