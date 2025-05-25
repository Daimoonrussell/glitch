import '../styles/global.css';
import type { AppProps } from 'next/app';
import { HeroParticles } from '../templates/HeroParticles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        id="global-particles-bg"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <HeroParticles />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
