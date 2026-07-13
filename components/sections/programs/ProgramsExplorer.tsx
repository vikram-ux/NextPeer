"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import { PROGRAM_CATEGORIES, PROGRAMS } from "@/data/programs";
import ProgramCard from "./ProgramCard";

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Beginner to Advanced"];
const SORT_OPTIONS = ["Popular", "Newest", "Price: Low to High", "Price: High to Low"];

export default function ProgramsExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [level, setLevel] = useState("All Levels");
  const [sort, setSort] = useState("Popular");

  const filteredPrograms = useMemo(() => {
    let result = PROGRAMS.filter((program) => {
      const matchesCategory =
        activeCategory === "all" || program.category === activeCategory;
      const matchesSearch =
        search.trim() === "" ||
        program.title.toLowerCase().includes(search.toLowerCase()) ||
        program.subtitle.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = level === "All Levels" || program.level === level;
      return matchesCategory && matchesSearch && matchesLevel;
    });

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "Newest") {
      result = [...result].sort((a, b) => (a.badge === "New" ? -1 : 1) - (b.badge === "New" ? -1 : 1));
    } else {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, activeCategory, level, sort]);

  return (
    <section className="bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search + filter bar */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a program..."
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {PROGRAM_CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.label}
              </option>
            ))}
          </select>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {LEVEL_OPTIONS.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s} value={`Sort by: ${s}`}>
                Sort by: {s}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Category tabs */}
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
          {PROGRAM_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`flex shrink-0 flex-col items-center gap-1.5 rounded-lg border px-5 py-3 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                }`}
              >
                <Icon size={18} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results heading */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Popular <span className="text-blue-600">Programs</span>
          </h2>
          <Link
            href="/programs"
            className="hidden items-center gap-1 text-sm font-semibold text-blue-600 hover:underline sm:flex"
          >
            View All Programs
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-slate-200 bg-white py-16 text-center">
            <p className="text-sm text-slate-500">
              No programs match your filters. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
