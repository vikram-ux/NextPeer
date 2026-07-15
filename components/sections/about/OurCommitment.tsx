import { Rocket } from "lucide-react";

export default function OurCommitment() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-slate-100 bg-slate-50 p-8 sm:flex-row sm:p-10">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
            <Rocket size={44} className="text-blue-500" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">Our Commitment</p>
            <div className="mt-2 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>Our success is measured by the success of our learners.</p>
              <p>
                Every program we create is designed to help you gain
                practical knowledge, build confidence, create an impressive
                portfolio, and move one step closer to your dream career.
              </p>
              <p>
                When you learn with NextPeer, you&apos;re not just enrolling
                in a program — you become part of a community committed to
                continuous growth and lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
