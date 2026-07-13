import Link from "next/link";
import { Star, Clock, BarChart2 } from "lucide-react";
import type { Program } from "@/types";

const BADGE_STYLES: Record<string, string> = {
  Bestseller: "bg-amber-400 text-amber-950",
  Popular: "bg-emerald-500 text-white",
  New: "bg-blue-600 text-white",
};

export default function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;

  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Thumbnail */}
      <div
        className={`relative flex aspect-[16/10] flex-col justify-between bg-gradient-to-br ${program.gradient} p-4`}
      >
        {program.badge && (
          <span
            className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${BADGE_STYLES[program.badge]}`}
          >
            {program.badge}
          </span>
        )}
        <div className="flex items-end justify-between">
          <p className="text-lg font-bold leading-snug text-white">
            {program.title}
          </p>
          <Icon className="h-8 w-8 shrink-0 text-white/70" strokeWidth={1.5} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-sm font-semibold text-slate-900">
          {program.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
          <span className="flex items-center gap-1 font-medium text-amber-500">
            <Star size={13} fill="currentColor" strokeWidth={0} />
            {program.rating.toFixed(1)} ({(program.reviewCount / 1000).toFixed(1)}k)
          </span>
          <span className="flex items-center gap-1">
            <BarChart2 size={13} />
            {program.level}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Clock size={13} />
            {program.duration}
          </span>
          <span className="text-base font-bold text-blue-600">
            ₹{program.price.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </Link>
  );
}
