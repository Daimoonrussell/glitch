import Link from 'next/link';

const Footer = () => (
  <footer className="border-t border-gray-800 bg-gray-950 px-4 pb-8 pt-12 text-gray-200">
    <div className="mx-auto flex max-w-screen-lg flex-col gap-8 md:flex-row md:items-center md:justify-between">
      {/* Logo + brand */}
      <div className="flex flex-col items-center gap-3 md:items-start">
        <Link href="/" passHref>
          <span className="inline-flex cursor-pointer items-center gap-2">
            <img
              src="/assets/images/logo.png"
              alt="GLITCHSTUDIO logo"
              className="h-10 w-auto"
            />
            <span className="hidden text-2xl font-bold tracking-tight text-white md:inline">
              GLITCHSTUDIO
            </span>
          </span>
        </Link>
        <span className="mt-1 text-xs text-gray-500">
          © {new Date().getFullYear()} GLITCHSTUDIO. Wszelkie prawa
          zastrzeżone.
        </span>
      </div>
      {/* Menu */}
      <nav className="w-full md:w-auto">
        <ul className="hidden flex-row gap-8 text-lg font-medium md:flex">
          <li>
            <Link href="/">Strona główna</Link>
          </li>
          <li>
            <Link href="#oferta">Oferta</Link>
          </li>
          <li>
            <Link href="#proces">Proces</Link>
          </li>
          <li>
            <Link href="#faq">FAQ</Link>
          </li>
          <li>
            <Link href="#kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export { Footer };
