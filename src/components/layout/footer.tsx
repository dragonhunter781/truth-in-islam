"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react"
import { siteConfig } from "@/lib/config"

const footerLinks = {
  explore: [
    { name: "About Islam", href: "/islam" },
    { name: "Five Pillars", href: "/pillars" },
    { name: "The Quran", href: "/quran" },
    { name: "The Hadith", href: "/hadith" },
    { name: "Islamic Beliefs", href: "/beliefs" },
  ],
  learn: [
    { name: "The Afterlife", href: "/afterlife" },
    { name: "Prophets in Islam", href: "/prophets" },
    { name: "Jesus in Islam", href: "/prophets/isa" },
    { name: "Elijah in Islam", href: "/prophets/ilyas" },
    { name: "About Muhammad", href: "/prophets/muhammad" },
  ],
  resources: [
    { name: "Articles", href: "/blog" },
    { name: "Search", href: "/search" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: siteConfig.links.facebook, icon: Facebook },
  { name: "Twitter", href: siteConfig.links.twitter, icon: Twitter },
  { name: "Instagram", href: siteConfig.links.instagram, icon: Instagram },
  { name: "YouTube", href: siteConfig.links.youtube, icon: Youtube },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-amber-600 shadow-lg shadow-red-500/25">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <span className="text-xl font-bold text-white">
                The Truth in Islam
              </span>
            </Link>
            <p className="mt-4 max-w-md text-slate-400">
              Examining what Islamic sources actually teach. Every claim sourced from the Quran, authentic hadith, and classical scholarship.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-amber-500/20 hover:text-amber-400 border border-slate-700 hover:border-amber-500/30"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Learn More
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} The Truth in Islam. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            Made with <Heart className="h-4 w-4 text-red-500" /> for seekers of truth
          </div>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 transition-colors hover:text-amber-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
