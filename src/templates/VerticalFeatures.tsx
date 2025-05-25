import { Section } from "../layout/Section";
import { FAQAccordion } from "../faq/FAQAccordion";

const VerticalFeatures = () => (
  <>
    {/* Kim jesteśmy? */}
    <Section yPadding="py-16" title="🔥 Kim jesteśmy?">
      <div
        id="kim-jestesmy"
        className="max-w-3xl mx-auto text-center px-4 animate-fade-in-section"
        style={{ animationDelay: "0.05s" }}
      >
        <p className="text-xl text-white mb-4">
          <span className="font-bold text-primary-400">GLITCHSTUDIO</span> to
          kolektyw projektantów, strategów i ludzi z obsesją na punkcie jakości.
          <br />
          <span className="text-primary-300">
            Nie jesteśmy korpo. Nie jesteśmy agencją "full service".
          </span>
          <br />
          Jesteśmy zakłóceniem w nudnym świecie komunikacji wizualnej.
        </p>
        <p className="text-lg text-gray-300 mb-2">
          Projektujemy bez szablonów, myślimy bez filtrów. Każda marka, z którą
          pracujemy, to nowy świat do odkrycia.
        </p>
      </div>
    </Section>

    {/* Nasze podejście */}
    <Section yPadding="py-16" title="🛠️ Nasze podejście">
      <div
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 text-center animate-fade-in-section"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-primary-500 text-white flex flex-col items-center">
          <span className="font-bold text-primary-300">💡 Słuchamy</span>
          <p className="mt-2 text-gray-200">
            Najpierw poznajemy Ciebie i Twoją markę
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-primary-500 text-white flex flex-col items-center">
          <span className="font-bold text-primary-300">
            🎯 Koncentrujemy się
          </span>
          <p className="mt-2 text-gray-200">Każda decyzja ma cel</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-primary-500 text-white flex flex-col items-center">
          <span className="font-bold text-primary-300">🚀 Działamy szybko</span>
          <p className="mt-2 text-gray-200">
            Prototypujemy, testujemy, poprawiamy
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-primary-500 text-white flex flex-col items-center">
          <span className="font-bold text-primary-300">🎨 Dowozimy</span>
          <p className="mt-2 text-gray-200">Bez chaosu, bez bullshitu</p>
        </div>
      </div>
      <p
        className="text-center text-lg text-gray-300 mt-8 animate-fade-in-section"
        style={{ animationDelay: "0.15s" }}
      >
        Wierzymy w brzydkie szkice, głośne kolory i odważne pomysły.
        <br />
        Nie szukamy klientów. Szukamy partnerów.
      </p>
    </Section>

    {/* Usługi */}
    <Section yPadding="py-16" title="🧩 Co robimy?">
      <div
        id="oferta"
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center animate-fade-in-section"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="bg-gradient-to-br from-primary-800 to-gray-900 rounded-xl p-6 shadow-lg text-center border border-primary-700 text-white flex flex-col items-center">
          <div className="text-3xl mb-2">🧠</div>
          <h3 className="font-bold text-xl mb-2 text-primary-200">
            Strategie marki
          </h3>
          <p className="text-gray-100">
            Zbudujemy DNA Twojej marki od podstaw – głos, ton, wartości,
            pozycjonowanie.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary-800 to-gray-900 rounded-xl p-6 shadow-lg text-center border border-primary-700 text-white flex flex-col items-center">
          <div className="text-3xl mb-2">🎨</div>
          <h3 className="font-bold text-xl mb-2 text-primary-200">
            Branding i identyfikacja
          </h3>
          <p className="text-gray-100">
            Logo, typografia, paleta, style. Wszystko, co sprawi, że Cię
            zapamiętają.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary-800 to-gray-900 rounded-xl p-6 shadow-lg text-center border border-primary-700 text-white flex flex-col items-center">
          <div className="text-3xl mb-2">🖥️</div>
          <h3 className="font-bold text-xl mb-2 text-primary-200">
            UX/UI design
          </h3>
          <p className="text-gray-100">
            Projektujemy strony i aplikacje, które są tak samo intuicyjne, jak
            piękne.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary-800 to-gray-900 rounded-xl p-6 shadow-lg text-center border border-primary-700 text-white flex flex-col items-center">
          <div className="text-3xl mb-2">📢</div>
          <h3 className="font-bold text-xl mb-2 text-primary-200">
            Komunikacja i copywriting
          </h3>
          <p className="text-gray-100">
            Hasła, treści, tone of voice. Jeśli trzeba – nawet nazwę dla Twojej
            firmy.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary-800 to-gray-900 rounded-xl p-6 shadow-lg text-center border border-primary-700 text-white flex flex-col items-center">
          <div className="text-3xl mb-2">🌐</div>
          <h3 className="font-bold text-xl mb-2 text-primary-200">
            No-code i webflow
          </h3>
          <p className="text-gray-100">
            Szybko wdrażamy projekty, które wyglądają jak z Behance, a działają
            jak rakieta.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary-800 to-gray-900 rounded-xl p-6 shadow-lg text-center border border-primary-700 text-white flex flex-col items-center">
          <div className="text-3xl mb-2">🔍</div>
          <h3 className="font-bold text-xl mb-2 text-primary-200">
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
    <Section yPadding="py-16" title="🤝 Zaufali nam">
      <div
        className="max-w-3xl mx-auto text-center px-4 animate-fade-in-section"
        style={{ animationDelay: "0.25s" }}
      >
        <p className="text-lg text-white mb-4">
          Pracowaliśmy z twórcami, startupami, fundacjami i szalonymi pomysłami,
          które nikt inny nie chciał ruszyć.
          <br />I dobrze – kochamy wyzwania bardziej niż wygodę.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 items-center">
          <span className="bg-gray-800 rounded-full px-5 py-2 text-primary-200 font-semibold border border-primary-700">
            Fundacja Zero
          </span>
          <span className="bg-gray-800 rounded-full px-5 py-2 text-primary-200 font-semibold border border-primary-700">
            Soundverse
          </span>
          <span className="bg-gray-800 rounded-full px-5 py-2 text-primary-200 font-semibold border border-primary-700">
            Młodzi w UX
          </span>
          <span className="bg-gray-800 rounded-full px-5 py-2 text-primary-200 font-semibold border border-primary-700">
            Radio dla Wszystkich
          </span>
        </div>
      </div>
    </Section>

    {/* Proces */}
    <Section yPadding="py-16" title="⚙️ Jak pracujemy?">
      <div
        id="proces"
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center px-4 items-stretch animate-fade-in-section"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-t-4 border-primary-500 text-white flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-2xl font-bold mb-2 text-primary-300">01</div>
            <div className="font-semibold mb-1 text-white">Szybka rozmowa</div>
            <div className="text-gray-300 text-sm">
              15 minut, bez zobowiązań. Chcemy wiedzieć, czy iskrzy. Jeśli nie –
              nie marnujemy czasu.
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-t-4 border-primary-500 text-white flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-2xl font-bold mb-2 text-primary-300">02</div>
            <div className="font-semibold mb-1 text-white">Brief & wycena</div>
            <div className="text-gray-300 text-sm">
              Pytania, mapa projektu, konkretna wycena. Zero „to zależy”.
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-t-4 border-primary-500 text-white flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-2xl font-bold mb-2 text-primary-300">03</div>
            <div className="font-semibold mb-1 text-white">Pierwsze szkice</div>
            <div className="text-gray-300 text-sm">
              Moodboardy, pomysły, kierunki wizualne. Tu zaczyna się magia.
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-t-4 border-primary-500 text-white flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-2xl font-bold mb-2 text-primary-300">04</div>
            <div className="font-semibold mb-1 text-white">
              Projekt właściwy
            </div>
            <div className="text-gray-300 text-sm">
              Wybrany kierunek rozwijamy do gotowego produktu.
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border-t-4 border-primary-500 text-white flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="text-2xl font-bold mb-2 text-primary-300">05</div>
            <div className="font-semibold mb-1 text-white">
              Wdrożenie lub przekazanie plików
            </div>
            <div className="text-gray-300 text-sm">
              Jeśli chcesz – zrobimy wszystko za Ciebie. Jeśli nie – dostajesz
              wszystko, czego potrzebujesz.
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* FAQ */}
    <Section yPadding="py-16" title="❓ Często zadawane pytania">
      <div
        id="faq"
        className="max-w-3xl mx-auto grid grid-cols-1 gap-6 px-4 text-center animate-fade-in-section"
        style={{ animationDelay: "0.35s" }}
      >
        <div
          className="animate-fade-in-section"
          style={{ animationDelay: "0.4s" }}
        >
          <FAQAccordion
            items={[
              {
                question: "Czy mogę zlecić tylko logo/stronę/tekst?",
                answer:
                  "Tak. Ale musimy być pewni, że nie robimy tego w próżni. Zadajemy dużo pytań.",
              },
              {
                question: "Ile to kosztuje?",
                answer:
                  "Minimalny budżet projektowy to 2 000 zł. Typowy zakres to 4–10 tys. za projekt kompleksowy.",
              },
              {
                question: "Jak długo to trwa?",
                answer:
                  "Małe projekty: 1–2 tygodnie. Większe: 3–6 tygodni. W ekspresie też działamy, ale to kosztuje.",
              },
              {
                question: "Czy mogę pogadać zanim zdecyduję?",
                answer: "Zawsze. Wystarczy napisać — nawet na Instagramie.",
              },
            ]}
          />
        </div>
      </div>
    </Section>

    {/* Kontakt */}
    <Section yPadding="py-16" title="📬 Kontakt">
      <div
        id="kontakt"
        className="max-w-2xl mx-auto text-center px-4 animate-fade-in-section"
        style={{ animationDelay: "0.45s" }}
      >
        <p className="text-lg text-white mb-4">
          Masz pomysł? Masz problem? A może po prostu chcesz pogadać o swojej
          marce?
          <br />
          Napisz do nas. Odpisujemy (prawie) natychmiast.
        </p>
        <div className="flex flex-col gap-2 items-center mt-6">
          <span className="font-bold text-xl text-primary-300">
            hello@glitchstudio.pl
          </span>
          <span className="text-gray-300">📍 Łódź / zdalnie wszędzie</span>
          <span className="text-gray-300">📱 IG: @glitchstudio</span>
        </div>
      </div>
    </Section>
  </>
);

export { VerticalFeatures };
