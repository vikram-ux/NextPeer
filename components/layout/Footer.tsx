import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FOOTER_LINK_GROUPS } from "@/data/content";
import Image from "next/image";

const SOCIALS = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="NextPeer Logo"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
                priority
              />
              <p className="text-lg font-bold text-white">
                Next<span className="text-blue-400">Peer</span>
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Empowering college students with skills, mentorship, internships
              and career opportunities.
            </p>
          </div>

          {/* Link groups */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-white">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <p className="text-sm font-semibold text-white">Connect With Us</p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <a href="mailto:support@nextpeer.in" className="flex items-center gap-2 hover:text-blue-400">
                <Mail size={14} />
                support@nextpeer.in
              </a>
              {/* <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-400">
                <Phone size={14} />
                +91 98765 43210
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} NextPeer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
