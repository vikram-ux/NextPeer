"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="bg-slate-50 pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900">
                Never Miss an Update
              </p>
              <p className="mt-1 max-w-md text-sm text-slate-600">
                Get the latest blogs, coding tips, free resources, and career
                opportunities delivered directly to your inbox.
              </p>
            </div>
          </div>

          {submitted ? (
            <p className="text-sm font-semibold text-blue-700">
              Thanks for subscribing! 🎉
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-sm gap-2 sm:w-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Subscribe
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
