import { FEATURE_HIGHLIGHTS } from "@/data/content";

export default function FeatureHighlights() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {FEATURE_HIGHLIGHTS.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    {feature.description}
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
