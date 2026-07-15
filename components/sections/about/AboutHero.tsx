import Link from "next/link";
import { ChevronRight, MessageSquare, TrendingUp } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-slate-900">About Us</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 pb-14 lg:grid-cols-2 lg:items-center">
          {/* Left copy */}
          <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              About <span className="text-blue-600">NextPeer</span>
            </h1>
            <p className="mt-3 text-lg font-semibold text-slate-800">
              Learn. Build. Get Hired.
            </p>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                At NextPeer, we believe education should lead to real
                opportunities — not just certificates.
              </p>
              <p>
                We&apos;re building a new generation of practical,
                industry-focused learning where students gain the skills,
                confidence, and experience needed to succeed in today&apos;s
                technology-driven world.
              </p>
              <p>
                Whether you&apos;re starting your journey or upgrading your
                career, NextPeer helps you bridge the gap between classroom
                knowledge and industry expectations through hands-on
                learning, live mentorship, and real-world projects.
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50">
              <Users4Icon />
            </div>
            <div className="absolute -top-4 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
              <MessageSquare size={18} className="text-blue-500" />
            </div>
            <div className="absolute -right-3 top-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
              <TrendingUp size={18} className="text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Users4Icon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-24 w-24 text-blue-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="22" cy="20" r="7" />
      <path d="M10 46c0-8 5-13 12-13s12 5 12 13" />
      <circle cx="44" cy="18" r="6" />
      <path d="M34 44c0.5-7 4.5-11 10-11s9.5 4 10 11" />
    </svg>
  );
}
