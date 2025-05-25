import Link from "next/link";
import { useState } from "react";

import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { HeroParticles } from "./HeroParticles";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <Background color="bg-gray-900 noise-bg">
      {/* Tło wideo na całą szerokość monitora, tylko pod hero, nie fixed! */}
      <div className="w-screen max-w-none overflow-hidden relative min-h-[600px]">
        <video
          className="absolute inset-0 w-full h-full min-h-[600px] object-cover z-0"
          src="/assets/images/hero.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Subtelne particles nad filmem, pod treścią hero */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          <HeroParticles />
        </div>
        {/* Hero content + navbar na wierzchu */}
        <div className="relative z-20">
          {/* Sticky glassmorphism navbar na całą szerokość, content nav ograniczony do max-w-screen-lg */}
          <nav className="sticky top-0 left-0 w-screen z-50 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/10 transition-all duration-300">
            <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between px-2 py-4">
              <div className="flex-shrink-0">
                <Link href="/">
                  <img
                    src="/assets/images/logo.png"
                    alt="GLITCHSTUDIO logo"
                    className="h-10 w-auto animate-logo-glitch"
                  />
                </Link>
              </div>
              <div className="sm:hidden">
                <button
                  className="text-primary-400 focus:outline-none"
                  onClick={() => setOpen(!open)}
                  aria-label={open ? "Zamknij menu" : "Otwórz menu"}
                >
                  {open ? (
                    <svg
                      className="w-8 h-8"
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
                      className="w-8 h-8"
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
              <ul className="navbar hidden sm:flex flex-row items-center gap-x-8 text-base font-semibold text-gray-100 ml-auto tracking-wider">
                <li>
                  <Link href="#kim-jestesmy">O nas</Link>
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
            </div>
          </nav>
          {/* Mobile menu: overlay na całą szerokość, nie wypycha treści hero */}
          {open && (
            <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex flex-col items-center justify-start pt-24 transition-all duration-300 animate-mobile-menu">
              <ul className="flex flex-col items-center gap-y-8 text-lg font-semibold text-white">
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
              <header className="text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center mb-4">
                  <img
                    src="/assets/images/logo.png"
                    alt="GLITCHSTUDIO logo"
                    className="block sm:hidden mb-2 h-12 w-auto animate-logo-glitch"
                  />
                  <span
                    className="hero-brutal text-5xl md:text-6xl font-extrabold tracking-tight mt-2 drop-shadow-lg uppercase block leading-tight md:leading-[1.05] animate-hero-glitch-gradient"
                    style={{ letterSpacing: "0.04em", color: "#fff" }}
                  >
                    Nowoczesne,
                    <br />
                    digital-native
                  </span>
                </div>
                <div
                  className="text-xl mb-4 text-primary-300 font-semibold tracking-widest"
                  style={{ fontFamily: "Syne, Arial, Helvetica, sans-serif" }}
                >
                  Design, który glitchuje algorytmy i zostaje w głowie.
                  <br />
                  Branding, web i narracja wizualna dla tych, którzy nie chcą
                  być kolejni.
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                  <Link href="#kontakt">
                    <div className="relative group">
                      <div className="btn btn-glitch font-bold px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 text-white shadow-xl border-2 border-primary-400/60 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-neon group-hover:border-primary-300 focus:outline-none focus:ring-4 focus:ring-primary-400/40 relative overflow-hidden">
                        <span className="relative z-10">
                          Zacznijmy zakłócenie
                        </span>
                        <span
                          className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 animate-glitch mix-blend-screen z-20"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                  </Link>
                  <Link href="#oferta">
                    <div className="relative group">
                      <div className="btn btn-glitch font-bold px-6 py-3 rounded-xl bg-gray-900/80 text-primary-300 border-2 border-primary-400/60 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-neon group-hover:border-primary-300 group-hover:bg-gray-800/90 focus:outline-none focus:ring-4 focus:ring-primary-400/40 relative overflow-hidden">
                        <span className="relative z-10">
                          Poznaj naszą ofertę
                        </span>
                        <span
                          className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 animate-glitch mix-blend-screen z-20"
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
