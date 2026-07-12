import { STATS } from "@/data/content";

export default function StatsBar() {
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-blue-900 px-6 py-10 sm:px-10">
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <Icon size={26} className="shrink-0 text-blue-300" strokeWidth={1.5} />
                  <div>
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-xs text-blue-200 sm:text-sm">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
