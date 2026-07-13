import { PROGRAM_TRUST_POINTS } from "@/data/programs";

export default function ProgramsTrustBar() {
  return (
    <section className="bg-slate-50 pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-100 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_TRUST_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={18} />
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
    </section>
  );
}
