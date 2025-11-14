import Link from "next/link";
import Logo from "./logo";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    children: [
      {
        label: "Concrete",
        children: [
          { label: "Ioncrete", href: "/ioncrete" },
          { label: "Corrosion Survey", href: "/condition-survey" },
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
  { label: "Learning", href: "/learning" },
  { label: "Store", href: "/store" },
];

interface NavLink {
  label: string;
  href?: string;
  children?: NavLink[];
}

function NavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150); // Small delay to prevent menu from closing immediately
  };

  if (link.children) {
    return (
      <li
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="cursor-pointer px-3 py-2 font-semibold hover:text-[var(--color-primary)] flex justify-between items-center gap-1 w-full">
          {link.label}
          {/* Down arrow for top-level */}
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </span>
        <ul className={`absolute left-0 top-full mt-2 min-w-max bg-white shadow-lg rounded z-50 p-2 space-y-1 transition-all duration-200 ${open ? 'block opacity-100' : 'hidden opacity-0'}`}>
          {link.children.map((child: NavLink) => (
            <NavSubItem key={child.label} link={child} level={2} />
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  if (link.children) {
    return (
      <li
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
        <ul className={`absolute left-full top-0 ml-2 min-w-max bg-white shadow-lg rounded z-50 p-2 space-y-1 transition-all duration-200 ${open ? 'block opacity-100' : 'hidden opacity-0'}`}>
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

// Mobile Navigation Components
function MobileNavItem({ link, onClose }: { link: NavLink; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (link.children) {
    return (
      <li className="border-b border-gray-200">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-gray-900 hover:text-[var(--color-primary)]"
        >
          {link.label}
          <svg 
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul className={`bg-gray-50 ${open ? 'block' : 'hidden'}`}>
          {link.children.map((child: NavLink) => (
            <MobileNavSubItem key={child.label} link={child} onClose={onClose} />
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li className="border-b border-gray-200">
      <Link 
        href={link.href!} 
        className="block px-4 py-3 font-semibold text-gray-900 hover:text-[var(--color-primary)]"
        onClick={onClose}
      >
        {link.label}
      </Link>
    </li>
  );
}

function MobileNavSubItem({ link, onClose }: { link: NavLink; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (link.children) {
    return (
      <li className="border-b border-gray-200">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-8 py-3 text-left font-medium text-gray-700 hover:text-[var(--color-primary)]"
        >
          {link.label}
          <svg 
            className={`w-4 h-4 transition-transform ${open ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <ul className={`bg-gray-100 ${open ? 'block' : 'hidden'}`}>
          {link.children.map((child: NavLink) => (
            <li key={child.label} className="border-b border-gray-200">
              <Link 
                href={child.href!} 
                className="block px-12 py-3 text-sm text-gray-600 hover:text-[var(--color-primary)]"
                onClick={onClose}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li className="border-b border-gray-200">
      <Link 
        href={link.href!} 
        className="block px-8 py-3 font-medium text-gray-700 hover:text-[var(--color-primary)]"
        onClick={onClose}
      >
        {link.label}
      </Link>
    </li>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-menu') && !target.closest('.hamburger')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-3">
            <ul className="flex gap-3 items-center">
              {navLinks.map((link) => (
                <NavItem key={link.label} link={link} />
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="hamburger md:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'translate-y-2'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu fixed inset-0 z-50 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="py-4">
                {navLinks.map((link) => (
                  <MobileNavItem key={link.label} link={link} onClose={() => setMobileMenuOpen(false)} />
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4">
              <div className="text-center text-sm text-gray-600">
                <p>Need help? Contact us</p>
                <a href="mailto:sales@ducorr.com" className="text-[#d9823f] font-semibold hover:underline">
                  sales@ducorr.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
