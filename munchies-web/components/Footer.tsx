"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-primary text-white px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
          {/* App Download */}
          <div className="col-span-1">
            <p className="text-sm leading-relaxed mb-6">
              Experience the Munchies Mobile App. Download our app today and
              enjoy a seamless ordering experience. Available on both iOS and
              Android.
            </p>
            <div className="flex gap-2">
              <div className="bg-black rounded-md px-3 py-1.5 flex items-center gap-1.5 text-xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-[8px] opacity-70">Download on the</div>
                  <div className="text-[10px] font-semibold">App Store</div>
                </div>
              </div>
              <div className="bg-black rounded-md px-3 py-1.5 flex items-center gap-1.5 text-xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M3.18 23.57c.29.13.64.06.85-.18l8.97-9.39-8.97-9.39c-.21-.24-.56-.31-.85-.18-.29.13-.48.42-.48.74v17.66c0 .32.19.61.48.74zM13.64 14l2.47-2.59L5.25 4.24 13.64 14zM21.54 11.34l-3.57-2.02-2.81 2.95 2.81 2.95 3.57-2.02c.58-.33.58-1.53 0-1.86zM5.25 23.76l10.86-7.17-2.47-2.59L5.25 23.76z" />
                </svg>
                <div>
                  <div className="text-[8px] opacity-70">GET IT ON</div>
                  <div className="text-[10px] font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-sm mb-4">ADDRESS</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Ashesi University</li>
              <li>Accra</li>
              <li>+233 56789007</li>
              <li>Munchies@tech.com</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-sm mb-4">SOCIALS</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Brand
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-accent text-white px-8 py-3 flex justify-between items-center text-sm">
        <span>2025 Copyright Munchies</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:underline cursor-pointer"
          type="button"
        >
          Back To Top
        </button>
      </div>
    </>
  );
}
