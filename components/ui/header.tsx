import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    children: [
      {
        label: "Concrete",
        children: [
          { label: "Ioncrete", href: "/ioncrete" },
          { label: "Condition Survey", href: "/condition-survey" },
        ],
      },
      {
        label: "Marine",
        children: [
          { label: "Marineshield", href: "/marineshield" },
          { label: "Powercell", href: "/powercell" },
          { label: "Powertide", href: "/powertide" },
          { label: "Unicell", href: "/unicell" },
        ],
      },
      {
        label: "Tanks",
        children: [
          { label: "Tankbox", href: "/tankbox" },
          { label: "Platepro", href: "/platepro" },
        ],
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Store", href: "/store" },
];

interface NavLink {
  label: string;
  href?: string;
  children?: NavLink[];
}

function NavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  if (link.children) {
    return (
      <li
        className="relative group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="cursor-pointer px-3 py-2 font-semibold hover:text-[var(--color-primary)] flex justify-between items-center gap-1 w-full">
          {link.label}
          {/* Down arrow for top-level */}
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </span>
        <ul className={`absolute left-0 top-full mt-2 min-w-max bg-white shadow-lg rounded z-50 p-2 space-y-1 transition-all duration-200 ${open ? 'block' : 'hidden'}`}>
          {link.children.map((child: NavLink) => (
            <NavSubItem  key={child.label} link={child} level={2} />
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li>
      <Link href={link.href!} className="px-3 py-2 hover:text-[var(--color-primary)] font-semibold block">
        {link.label}
      </Link>
    </li>
  );
}

function NavSubItem({ link, level = 1 }: { link: NavLink; level?: number }) {
  const [open, setOpen] = useState(false);
  if (link.children) {
    return (
      <li
        className="relative group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="cursor-pointer px-3 py-2 font-semibold hover:text-[var(--color-primary)] flex items-center gap-1">
          {link.label}
          {/* Arrow direction depends on level */}
          {level > 1 ? (
            // Right arrow
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          ) : (
            // Down arrow
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          )}
        </span>
        <ul className={`absolute left-full top-0 ml-2 min-w-max bg-white shadow-lg rounded z-50 p-2 space-y-1 transition-all duration-200 ${open ? 'block' : 'hidden'}`}>
          {link.children.map((child: NavLink) => (
            <NavSubItem key={child.label} link={child} level={level + 1} />
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li>
      <Link href={link.href!} className="px-3 py-2 hover:text-[var(--color-primary)] font-semibold block whitespace-nowrap w-full flex justify-between items-center">
        {link.label}
      </Link>
    </li>
  );
}

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation links */}
          <nav className="flex flex-1 items-center justify-end gap-3">
            <ul className="flex gap-3 items-center">
              {navLinks.map((link) => (
                <NavItem key={link.label} link={link} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
