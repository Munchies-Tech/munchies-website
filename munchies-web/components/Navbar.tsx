"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/menu", label: "Menu" },
  { href: "/blog", label: "Blog" },
  // { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center w-full py-4 z-50">
      <div className="flex items-center gap-6 bg-primary rounded-full px-8 py-3">
        {/* Logo */}
        <Link href="/" className="text-white mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="rgba(253, 234, 182, 1)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
              <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
            </g>
          </svg>
        </Link>

        {/* Links */}
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href === "/" && pathname === "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white text-sm font-medium transition-colors hover:opacity-80 ${
                isActive ? "underline underline-offset-4 decoration-2" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
