import {
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

import { FAQAccordion } from '../faq/FAQAccordion';
import { Section } from '../layout/Section';

const iconClass = 'mb-2 h-8 w-8 text-primary-300';
const sectionIconClass =
  'inline-block h-7 w-7 align-middle text-primary-400 mr-2';

const sectionTitles = {
  kim: (
    <>
      <UsersIcon className={sectionIconClass} />
      Kim jesteśmy?
    </>
  ),
  podejscie: (
    <>
      <WrenchScrewdriverIcon className={sectionIconClass} />
      Nasze podejście
    </>
  ),
  uslugi: (
    <>
      <PuzzlePieceIcon className={sectionIconClass} />
      Co robimy?
    </>
  ),
  zaufali: (
    <>
      <SparklesIcon className={sectionIconClass} />
      Zaufali nam
    </>
  ),
  proces: (
    <>
      <Cog6ToothIcon className={sectionIconClass} />
      Jak pracujemy?
    </>
  ),
  faq: (
    <>
      <QuestionMarkCircleIcon className={sectionIconClass} />
      Często zadawane pytania
    </>
  ),
  kontakt: (
    <>
      <EnvelopeIcon className={sectionIconClass} />
      Kontakt
    </>
  ),
};

const VerticalFeatures = () => (
  <>
    {/* Kim jesteśmy? */}
    <Section yPadding="py-16" title={sectionTitles.kim}>
      <div
        id="kim-jestesmy"
        className="animate-fade-in-section mx-auto flex max-w-4xl flex-col-reverse items-center gap-8 px-4 text-center md:flex-row md:gap-16"
        style={{ animationDelay: '0.05s' }}
      >
        {/* Tekst */}
        <div className="flex flex-1 flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            GLITCHSTUDIO
          </h2>
          <div className="mb-4 text-lg font-semibold text-primary-300">
            Kolektyw projektantów, strategów i ludzi z obsesją na punkcie
            jakości.
          </div>
          <div className="mb-4 text-base text-gray-200">
            Nie jesteśmy korpo. Nie jesteśmy agencją &quot;full service&quot;.
            Jesteśmy zakłóceniem w nudnym świecie komunikacji wizualnej.
          </div>
          <div className="text-base text-gray-400">
            Projektujemy bez szablonów, myślimy bez filtrów. Każda marka, z
            którą pracujemy, to nowy świat do odkrycia.
          </div>
        </div>
        {/* Zdjęcie na szerokość kontentu na mobile */}
        <div className="flex w-full flex-1 items-center justify-center">
          <img
            src="/assets/images/about-us-img.jpg"
            alt="GLITCHSTUDIO zespół"
            className="h-auto w-full max-w-[400px] rounded-2xl border-2 border-primary-700 object-cover shadow-xl md:size-[400px]"
            loading="lazy"
          />
        </div>
      </div>
    </Section>

    {/* Nasze podejście */}
    <Section yPadding="py-16" title={sectionTitles.podejscie}>
      <div
        className="animate-fade-in-section mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 text-center sm:grid-cols-2"
        style={{ animationDelay: '0.1s' }}
      >
        <div className="flex flex-col items-center rounded-xl border-l-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <LightBulbIcon className={iconClass} />
          <span className="font-bold text-primary-300">Słuchamy</span>
          <p className="mt-2 text-gray-200">
            Najpierw poznajemy Ciebie i Twoją markę
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl border-l-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <Cog6ToothIcon className={iconClass} />
          <span className="font-bold text-primary-300">Koncentrujemy się</span>
          <p className="mt-2 text-gray-200">Każda decyzja ma cel</p>
        </div>
        <div className="flex flex-col items-center rounded-xl border-l-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <SparklesIcon className={iconClass} />
          <span className="font-bold text-primary-300">Działamy szybko</span>
          <p className="mt-2 text-gray-200">
            Prototypujemy, testujemy, poprawiamy
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl border-l-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <PuzzlePieceIcon className={iconClass} />
          <span className="font-bold text-primary-300">Dowozimy</span>
          <p className="mt-2 text-gray-200">Bez chaosu, bez bullshitu</p>
        </div>
      </div>
      <p
        className="animate-fade-in-section mt-8 text-center text-lg text-gray-300"
        style={{ animationDelay: '0.15s' }}
      >
        Wierzymy w brzydkie szkice, głośne kolory i odważne pomysły.
        <br />
        Nie szukamy klientów. Szukamy partnerów.
      </p>
    </Section>

    {/* Usługi */}
    <Section yPadding="py-16" title={sectionTitles.uslugi}>
      <div
        id="oferta"
        className="animate-fade-in-section mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-3"
        style={{ animationDelay: '0.2s' }}
      >
        <div className="flex flex-col items-center rounded-xl border border-primary-700 bg-gradient-to-br from-primary-800 to-gray-900 p-6 text-center text-white shadow-lg">
          <LightBulbIcon className={iconClass} />
          <h3 className="mb-2 text-xl font-bold text-primary-200">
            Strategie marki
          </h3>
          <p className="text-gray-100">
            Zbudujemy DNA Twojej marki od podstaw – głos, ton, wartości,
            pozycjonowanie.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl border border-primary-700 bg-gradient-to-br from-primary-800 to-gray-900 p-6 text-center text-white shadow-lg">
          <SparklesIcon className={iconClass} />
          <h3 className="mb-2 text-xl font-bold text-primary-200">
            Branding i identyfikacja
          </h3>
          <p className="text-gray-100">
            Logo, typografia, paleta, style. Wszystko, co sprawi, że Cię
            zapamiętają.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl border border-primary-700 bg-gradient-to-br from-primary-800 to-gray-900 p-6 text-center text-white shadow-lg">
          <DevicePhoneMobileIcon className={iconClass} />
          <h3 className="mb-2 text-xl font-bold text-primary-200">
            UX/UI design
          </h3>
          <p className="text-gray-100">
            Projektujemy strony i aplikacje, które są tak samo intuicyjne, jak
            piękne.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl border border-primary-700 bg-gradient-to-br from-primary-800 to-gray-900 p-6 text-center text-white shadow-lg">
          <ChatBubbleLeftRightIcon className={iconClass} />
          <h3 className="mb-2 text-xl font-bold text-primary-200">
            Komunikacja i copywriting
          </h3>
          <p className="text-gray-100">
            Hasła, treści, tone of voice. Jeśli trzeba – nawet nazwę dla Twojej
            firmy.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl border border-primary-700 bg-gradient-to-br from-primary-800 to-gray-900 p-6 text-center text-white shadow-lg">
          <GlobeAltIcon className={iconClass} />
          <h3 className="mb-2 text-xl font-bold text-primary-200">
            No-code i webflow
          </h3>
          <p className="text-gray-100">
            Szybko wdrażamy projekty, które wyglądają jak z Behance, a działają
            jak rakieta.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-xl border border-primary-700 bg-gradient-to-br from-primary-800 to-gray-900 p-6 text-center text-white shadow-lg">
          <MagnifyingGlassIcon className={iconClass} />
          <h3 className="mb-2 text-xl font-bold text-primary-200">
            Audyt & optymalizacja
          </h3>
          <p className="text-gray-100">
            Analizujemy, testujemy i usprawniamy Twoją stronę lub markę, by była
            jeszcze skuteczniejsza.
          </p>
        </div>
      </div>
    </Section>

    {/* Zaufali nam */}
    <Section yPadding="py-16" title={sectionTitles.zaufali}>
      <div
        className="animate-fade-in-section mx-auto max-w-3xl px-4 text-center"
        style={{ animationDelay: '0.25s' }}
      >
        <p className="mb-4 text-lg text-white">
          Pracowaliśmy z twórcami, startupami, fundacjami i szalonymi pomysłami,
          które nikt inny nie chciał ruszyć.
          <br />I dobrze – kochamy wyzwania bardziej niż wygodę.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-full border border-primary-700 bg-gray-800 px-5 py-2 font-semibold text-primary-200">
            Fundacja Zero
          </span>
          <span className="rounded-full border border-primary-700 bg-gray-800 px-5 py-2 font-semibold text-primary-200">
            Soundverse
          </span>
          <span className="rounded-full border border-primary-700 bg-gray-800 px-5 py-2 font-semibold text-primary-200">
            Młodzi w UX
          </span>
          <span className="rounded-full border border-primary-700 bg-gray-800 px-5 py-2 font-semibold text-primary-200">
            Radio dla Wszystkich
          </span>
        </div>
      </div>
    </Section>

    {/* Proces */}
    <Section yPadding="py-16" title={sectionTitles.proces}>
      <div
        id="proces"
        className="animate-fade-in-section mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-6 px-4 text-center md:grid-cols-5"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="flex min-h-[220px] flex-col justify-between rounded-xl border-t-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <div>
            <div className="mb-2 text-2xl font-bold text-primary-300">01</div>
            <div className="mb-1 font-semibold text-white">Szybka rozmowa</div>
            <div className="text-sm text-gray-300">
              15 minut, bez zobowiązań. Chcemy wiedzieć, czy iskrzy. Jeśli nie –
              nie marnujemy czasu.
            </div>
          </div>
        </div>
        <div className="flex min-h-[220px] flex-col justify-between rounded-xl border-t-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <div>
            <div className="mb-2 text-2xl font-bold text-primary-300">02</div>
            <div className="mb-1 font-semibold text-white">Brief & wycena</div>
            <div className="text-sm text-gray-300">
              Pytania, mapa projektu, konkretna wycena. Zero „to zależy”.
            </div>
          </div>
        </div>
        <div className="flex min-h-[220px] flex-col justify-between rounded-xl border-t-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <div>
            <div className="mb-2 text-2xl font-bold text-primary-300">03</div>
            <div className="mb-1 font-semibold text-white">Pierwsze szkice</div>
            <div className="text-sm text-gray-300">
              Moodboardy, pomysły, kierunki wizualne. Tu zaczyna się magia.
            </div>
          </div>
        </div>
        <div className="flex min-h-[220px] flex-col justify-between rounded-xl border-t-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <div>
            <div className="mb-2 text-2xl font-bold text-primary-300">04</div>
            <div className="mb-1 font-semibold text-white">
              Projekt właściwy
            </div>
            <div className="text-sm text-gray-300">
              Wybrany kierunek rozwijamy do gotowego produktu.
            </div>
          </div>
        </div>
        <div className="flex min-h-[220px] flex-col justify-between rounded-xl border-t-4 border-primary-500 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
          <div>
            <div className="mb-2 text-2xl font-bold text-primary-300">05</div>
            <div className="mb-1 font-semibold text-white">
              Wdrożenie lub przekazanie plików
            </div>
            <div className="text-sm text-gray-300">
              Jeśli chcesz – zrobimy wszystko za Ciebie. Jeśli nie – dostajesz
              wszystko, czego potrzebujesz.
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* FAQ */}
    <Section yPadding="py-16" title={sectionTitles.faq}>
      <div
        id="faq"
        className="animate-fade-in-section mx-auto grid max-w-3xl grid-cols-1 gap-6 px-4 text-center"
        style={{ animationDelay: '0.35s' }}
      >
        <div
          className="animate-fade-in-section"
          style={{ animationDelay: '0.4s' }}
        >
          <FAQAccordion
            items={[
              {
                question: 'Czy mogę zlecić tylko logo/stronę/tekst?',
                answer:
                  'Tak. Ale musimy być pewni, że nie robimy tego w próżni. Zadajemy dużo pytań.',
              },
              {
                question: 'Ile to kosztuje?',
                answer:
                  'Minimalny budżet projektowy to 2 000 zł. Typowy zakres to 4–10 tys. za projekt kompleksowy.',
              },
              {
                question: 'Jak długo to trwa?',
                answer:
                  'Małe projekty: 1–2 tygodnie. Większe: 3–6 tygodni. W ekspresie też działamy, ale to kosztuje.',
              },
              {
                question: 'Czy mogę pogadać zanim zdecyduję?',
                answer: 'Zawsze. Wystarczy napisać — nawet na Instagramie.',
              },
            ]}
          />
        </div>
      </div>
    </Section>

    {/* Kontakt */}
    <Section yPadding="py-16" title={sectionTitles.kontakt}>
      <div
        id="kontakt"
        className="animate-fade-in-section mx-auto max-w-2xl px-4 text-center"
        style={{ animationDelay: '0.45s' }}
      >
        <p className="mb-4 text-lg text-white">
          Masz pomysł? Masz problem? A może po prostu chcesz pogadać o swojej
          marce?
          <br />
          Napisz do nas. Odpisujemy (prawie) natychmiast.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          <span className="text-xl font-bold text-primary-300">
            hello@glitchstudio.pl
          </span>
          <span className="text-gray-300">📍 Łódź / zdalnie wszędzie</span>
          <span className="text-gray-300">📱 IG: @glitchstudio</span>
        </div>
      </div>
    </Section>
    {/* <ScrollToTopButton /> removed: now rendered in Base.tsx for global visibility */}
  </>
);

export { VerticalFeatures };

export const ScrollToTopButton = () => {
  // Sprawdź, gdzie jest scroll: window czy główny kontener
  const [visible, setVisible] = useState(false);
  // Użyj useState + useEffect do detekcji szerokości okna (SSR safe)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    // Spróbuj znaleźć główny kontener z overflow
    let scrollContainer: Window | HTMLElement = window;
    const mainDiv = document.querySelector(
      'body > div#__next > div',
    ) as HTMLElement | null;
    if (mainDiv && mainDiv.scrollHeight > mainDiv.clientHeight + 10) {
      scrollContainer = mainDiv;
    }
    const onScroll = () => {
      const scrollY =
        scrollContainer === window
          ? window.scrollY
          : (scrollContainer as HTMLElement).scrollTop;
      setVisible(scrollY > 200);
    };
    if (scrollContainer === window) {
      window.addEventListener('scroll', onScroll);
    } else {
      (scrollContainer as HTMLElement).addEventListener('scroll', onScroll);
    }
    // Wywołaj raz na start
    onScroll();
    return () => {
      if (scrollContainer === window) {
        window.removeEventListener('scroll', onScroll);
      } else {
        (scrollContainer as HTMLElement).removeEventListener(
          'scroll',
          onScroll,
        );
      }
    };
  }, []);

  const handleClick = () => {
    const mainDiv = document.querySelector(
      'body > div#__next > div',
    ) as HTMLElement | null;
    if (mainDiv && mainDiv.scrollHeight > mainDiv.clientHeight + 10) {
      mainDiv.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      style={{
        zIndex: 9999999,
        position: 'fixed',
        bottom: isMobile ? '12px' : '20px',
        right: isMobile ? '12px' : '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: isMobile ? '44px' : '56px',
        height: isMobile ? '44px' : '56px',
        background: 'transparent',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: isMobile
          ? '0 1px 4px 0 rgba(0,0,0,0.13)'
          : '0 2px 8px 0 rgba(0,0,0,0.13)', // mniej mocny
      }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
    >
      <span
        style={{
          display: 'block',
          filter: 'drop-shadow(0 1px 4px #38bdf888) drop-shadow(0 0 1px #fff)',
          transition: 'filter 0.2s',
          animation: 'bounce-up 1.2s infinite',
        }}
      >
        <svg
          width={isMobile ? 24 : 32}
          height={isMobile ? 24 : 32}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <path
            d="M7 18L14 11L21 18"
            stroke="#fff"
            strokeWidth={isMobile ? 2 : 3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};
