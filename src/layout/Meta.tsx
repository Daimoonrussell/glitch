import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="author" content="Damian Faber" />
        <meta name="copyright" content="Damian Faber 2025" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={AppConfig.site_name} />
        <meta property="og:locale" content={AppConfig.locale} />
        <meta
          property="og:image"
          content="/assets/images/nextjs-landing-page-screenshot.png"
        />
        <meta property="og:image:alt" content="GLITCH – Agencja Kreatywna" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@glitchstudio" />
        <meta property="twitter:creator" content="@glitchstudio" />
        <link
          rel="canonical"
          href={props.canonical || 'https://glitchstudio.pl/'}
          key="canonical"
        />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical || 'https://glitchstudio.pl/'}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical || 'https://glitchstudio.pl/',
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: 'https://glitchstudio.pl/assets/images/nextjs-landing-page-screenshot.png',
              width: 1200,
              height: 630,
              alt: 'GLITCH – Agencja Kreatywna',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@glitchstudio',
          site: '@glitchstudio',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'agencja kreatywna, strony internetowe, branding, web design, Warszawa, GLITCH, webflow, identyfikacja wizualna, projektowanie logo, UX/UI, digital, studio kreatywne',
          },
          { name: 'author', content: 'Damian Faber' },
          { name: 'copyright', content: 'Damian Faber 2025' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'GLITCHSTUDIO',
            url: 'https://glitchstudio.pl/',
            logo: 'https://glitchstudio.pl/assets/images/logo.png',
            sameAs: [
              'https://www.facebook.com/glitchstudio',
              'https://www.instagram.com/glitchstudio',
              'https://www.linkedin.com/company/glitchstudio',
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                email: 'hello@glitchstudio.pl',
                contactType: 'customer support',
                areaServed: 'PL',
                availableLanguage: ['Polish', 'English'],
              },
            ],
          }),
        }}
      />
    </>
  );
};

export { Meta };
