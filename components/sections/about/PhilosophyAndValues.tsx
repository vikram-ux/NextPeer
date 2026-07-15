import { CheckCircle2 } from "lucide-react";
import { ABOUT_PHILOSOPHY, ABOUT_CORE_VALUES } from "@/data/about";

export default function PhilosophyAndValues() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Philosophy */}
          <div className="rounded-2xl bg-blue-50 p-6 sm:p-8">
            <p className="text-lg font-bold text-blue-700">
              Our Learning Philosophy
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-800">
              We believe that:
            </p>
            <ul className="mt-3 space-y-2.5">
              {ABOUT_PHILOSOPHY.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue-500"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Core Values */}
          <div>
            <p className="text-lg font-bold text-slate-900">Our Core Values</p>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {ABOUT_CORE_VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {value.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                        {value.description}
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
