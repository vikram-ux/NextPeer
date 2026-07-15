import { ABOUT_MISSION_VISION } from "@/data/about";

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-100 bg-white p-6 sm:grid-cols-2 sm:p-8">
          {ABOUT_MISSION_VISION.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
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
