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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              fill="currentColor"
            />
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
