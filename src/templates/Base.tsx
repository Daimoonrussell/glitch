import Link from 'next/link';
import { useState } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="overflow-x-hidden text-gray-600 antialiased"
      style={{
        overflowY: 'auto',
        overscrollBehavior: 'none',
        height: '100dvh',
      }}
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/* Sticky navbar na CAŁEJ stronie */}
      <div
        className="glass fixed left-0 top-0 z-50 w-full rounded-none shadow-lg backdrop-blur-lg transition-all duration-300"
        style={{ background: 'rgba(17, 24, 39, 0.82)' }}
      >
        <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between p-4">
          <div className="shrink-0">
            <Link href="/">
              <img
                src="/assets/images/logo.png"
                alt="GLITCHSTUDIO logo"
                className="animate-logo-glitch h-10 w-auto"
              />
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              className="text-primary-400 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            >
              {open ? (
                <svg
                  className="size-8"
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
                  className="size-8"
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
          <ul className="navbar ml-auto hidden flex-row items-center gap-x-8 text-base font-semibold tracking-wider text-gray-100 sm:flex">
            <li>
              <Link
                href="#kim-jestesmy"
                className="nav-link-ux group relative overflow-hidden"
              >
                <span className="group-hover:drop-shadow-glow transition-colors duration-300 group-hover:text-primary-400">
                  O nas
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-400 to-primary-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="#oferta"
                className="nav-link-ux group relative overflow-hidden"
              >
                <span className="group-hover:drop-shadow-glow transition-colors duration-300 group-hover:text-primary-400">
                  Oferta
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-400 to-primary-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="#proces"
                className="nav-link-ux group relative overflow-hidden"
              >
                <span className="group-hover:drop-shadow-glow transition-colors duration-300 group-hover:text-primary-400">
                  Proces
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-400 to-primary-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="nav-link-ux group relative overflow-hidden"
              >
                <span className="group-hover:drop-shadow-glow transition-colors duration-300 group-hover:text-primary-400">
                  FAQ
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-400 to-primary-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="#kontakt"
                className="nav-link-ux group relative overflow-hidden"
              >
                <span className="group-hover:drop-shadow-glow transition-colors duration-300 group-hover:text-primary-400">
                  Kontakt
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-400 to-primary-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile menu: overlay na całą szerokość, logo sticky na górze */}
      {open && (
        <div className="animate-mobile-menu fixed inset-0 z-40 flex flex-col items-center justify-start bg-black/80 pt-0 backdrop-blur-md transition-all duration-300">
          <div className="sticky left-0 top-0 z-50 flex w-full items-center justify-center border-b border-white/10 bg-black/80 py-4">
            <Link href="/">
              <img
                src="/assets/images/logo.png"
                alt="GLITCHSTUDIO logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <ul className="mt-8 flex flex-col items-center gap-y-8 text-lg font-semibold text-white">
            <li>
              <Link href="#kim-jestesmy" onClick={() => setOpen(false)}>
                O nas
              </Link>
            </li>
            <li>
              <Link href="#oferta" onClick={() => setOpen(false)}>
                Oferta
              </Link>
            </li>
            <li>
              <Link href="#proces" onClick={() => setOpen(false)}>
                Proces
              </Link>
            </li>
            <li>
              <Link href="#faq" onClick={() => setOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#kontakt" onClick={() => setOpen(false)}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
      <Hero />
      <VerticalFeatures />
      {/* Kontakt - tylko formularz, bez nagłówka i opisu */}
      <section
        id="kontakt"
        className="flex flex-col items-center justify-center bg-gray-950 px-4 py-16 text-center"
      >
        <form className="flex w-full max-w-screen-lg flex-col gap-6 rounded-2xl border border-primary-800 bg-gray-900/90 p-8 shadow-xl">
          <input
            type="text"
            name="name"
            placeholder="Imię i nazwisko"
            className="rounded-lg border border-primary-700 bg-gray-900/80 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Twój e-mail"
            className="rounded-lg border border-primary-700 bg-gray-900/80 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
          <textarea
            name="message"
            placeholder="Opisz swój pomysł lub zapytanie..."
            rows={5}
            className="rounded-lg border border-primary-700 bg-gray-900/80 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
          <button
            type="submit"
            className="btn btn-glitch rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Wyślij wiadomość
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export { Base };
