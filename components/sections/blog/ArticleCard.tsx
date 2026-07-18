import Link from "next/link";
import { Clock } from "lucide-react";
import type { BlogPost } from "@/types";

export default function ArticleCard({ post }: { post: BlogPost }) {
  const Icon = post.icon;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${post.gradient}`}
      >
        <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white ring-1 ring-white/30">
          {post.number}
        </span>
        <Icon className="h-12 w-12 text-white/80" strokeWidth={1.25} />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-semibold leading-snug text-slate-900">
          {post.title}
        </p>
        <p className="text-xs leading-relaxed text-slate-500">
          {post.excerpt}
        </p>
        <span className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-slate-500">
          <Clock size={12} />
          {post.readTime}
        </span>
      </div>
    </Link>
  );
}
