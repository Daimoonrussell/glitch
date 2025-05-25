import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="flex w-full items-center justify-between px-4 py-2">
        {/* Logo: zawsze po lewej */}
        <div className="flex-shrink-0">
          <Link href="/">{props.logo}</Link>
        </div>
        {/* Hamburger tylko na mobile, po prawej */}
        <div className="sm:hidden">
          <button
            className="text-primary-400 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            {open ? (
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Menu: desktop zawsze widoczne, mobile rozwijane pod navem */}
        <ul
          className={`navbar ml-auto hidden flex-row items-center gap-x-8 text-xl font-medium text-gray-100 sm:flex`}
        >
          {props.children}
        </ul>
      </div>
      {/* Mobile menu: slide-down pod navem */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 sm:hidden ${
          open ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
        style={{ background: "rgba(17,17,17,0.98)" }}
      >
        <ul className="flex flex-col items-center gap-y-6 text-xl font-medium text-gray-100">
          {props.children}
        </ul>
      </div>
    </nav>
  );
};

export { NavbarTwoColumns };
