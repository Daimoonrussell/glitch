import Link from 'next/link';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <Background color="bg-gray-900 noise-bg">
      {/* Tło wideo na całą szerokość monitora, tylko pod hero, nie fixed! */}
      <div className="relative min-h-[600px] w-screen max-w-none overflow-hidden">
        {/* Hero image na całą szerokość */}
        <img
          src="/assets/images/hero-mage.jpg"
          alt="GLITCHSTUDIO hero background"
          className="absolute inset-0 z-0 size-full object-cover object-center"
          style={{ minHeight: '600px' }}
          loading="eager"
          fetchPriority="high"
          draggable="false"
        />
        {/* Warstwa gradientu i noise na obrazku */}
        <div className="pointer-events-none absolute inset-0 z-10 min-h-[600px] bg-gradient-to-tr from-primary-900/80 via-gray-900/70 to-primary-700/80 opacity-90 transition-opacity duration-700" />
        <div className="noise-bg pointer-events-none absolute inset-0 z-20 min-h-[600px] opacity-10" />
        {/* Hero content + mobile menu na wierzchu */}
        <div className="relative z-30">
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
          {/* Hero content */}
          <div className="pt-20">
            <Section yPadding="pt-16 pb-32">
              <header className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
                <div className="mb-4 flex flex-col items-center justify-center">
                  <img
                    src="/assets/images/logo.png"
                    alt="GLITCHSTUDIO logo"
                    className="animate-logo-glitch mb-2 block h-12 w-auto sm:hidden"
                  />
                  <span
                    className="hero-brutal animate-hero-glitch-gradient mt-2 block text-5xl font-extrabold uppercase leading-tight tracking-tight drop-shadow-lg md:text-6xl md:leading-[1.05]"
                    style={{ letterSpacing: '0.04em', color: '#fff' }}
                  >
                    Nowoczesne,
                    <br />
                    digital-native
                  </span>
                </div>
                <div
                  className="mb-4 text-xl font-semibold tracking-widest text-primary-300"
                  style={{ fontFamily: 'Syne, Arial, Helvetica, sans-serif' }}
                >
                  Design, który glitchuje algorytmy i zostaje w głowie.
                  <br />
                  Branding, web i narracja wizualna dla tych, którzy nie chcą
                  być kolejni.
                </div>
                <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="#kontakt">
                    <div className="group relative">
                      <div className="btn btn-glitch group-hover:shadow-neon relative overflow-hidden rounded-xl border-2 border-primary-400/60 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 px-6 py-3 font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 will-change-transform focus:outline-none focus:ring-4 focus:ring-primary-400/40 active:scale-95 group-hover:scale-105 group-hover:border-primary-300">
                        <span className="relative z-10">
                          Zacznijmy zakłócenie
                        </span>
                        <span
                          className="animate-glitch pointer-events-none absolute left-0 top-0 z-20 size-full opacity-0 mix-blend-screen group-hover:opacity-100"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                  </Link>
                  <Link href="#oferta">
                    <div className="group relative">
                      <div className="btn btn-glitch group-hover:shadow-neon relative overflow-hidden rounded-xl border-2 border-primary-400/60 bg-gray-900/80 px-6 py-3 font-bold text-primary-300 shadow-lg backdrop-blur-md transition-all duration-300 will-change-transform focus:outline-none focus:ring-4 focus:ring-primary-400/40 active:scale-95 group-hover:scale-105 group-hover:border-primary-300 group-hover:bg-gray-800/90">
                        <span className="relative z-10">
                          Poznaj naszą ofertę
                        </span>
                        <span
                          className="animate-glitch pointer-events-none absolute left-0 top-0 z-20 size-full opacity-0 mix-blend-screen group-hover:opacity-100"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                  </Link>
                </div>
              </header>
            </Section>
          </div>
        </div>
      </div>
    </Background>
  );
};

export { Hero };
