import { ChevronRight } from "lucide-react";
import { ABOUT_AUDIENCE, ABOUT_PROGRAM_AREAS } from "@/data/about";

export default function WhoWeServeAndPrograms() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          {/* Who We Serve */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8">
            <p className="text-lg font-bold text-slate-900">Who We Serve</p>
            <ul className="mt-4 space-y-1">
              {ABOUT_AUDIENCE.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={16} className="text-blue-500" />
                      {item.label}
                    </span>
                    <ChevronRight size={15} className="text-slate-300" />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Our Programs */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8">
            <p className="text-lg font-bold text-slate-900">Our Programs</p>
            <p className="mt-1 text-sm text-slate-500">
              NextPeer offers industry-ready programs in areas such as:
            </p>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
              {ABOUT_PROGRAM_AREAS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    <Icon size={16} className="text-blue-500" />
                    {item.label}
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              New programs are added regularly to keep learners aligned with
              the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
