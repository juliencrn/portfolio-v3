import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { ReactNode } from 'react';
import { navMenu, siteMetadata, socialMenu } from '../config';
import AnimeOnAppear from './AnimeOnAppear';

interface LayoutProps {
  pageTitle?: string;
  backgroundIndex?: number;
  children: ReactNode;
}

function Layout({ children, pageTitle, backgroundIndex }: LayoutProps) {
  const router = useRouter();
  const seo = {
    title: pageTitle || "Julien's portfolio",
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    image: '',
    url: `${siteMetadata.siteUrl}${router.pathname}`,
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {/* <meta name="image" content={seo.image} /> */}
        <link rel="canonical" key={seo.url} href={seo.url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:description" content={seo.description} />
        {/* <meta name="twitter:image" content={seo.image} /> */}

        <meta property="og:title" content={seo.title} />
        <meta property="og:site_name" content={seo.siteName} />
        {/* <meta property="og:image" content={seo.image} /> */}
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
      </Head>

      <div className={`Layout page-bg-${backgroundIndex || 4}`}>
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </div>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}

export default Layout;

function Header() {
  return (
    <AnimeOnAppear>
      <header className="w-full px-4 py-6 font-mono flex justify-between max-w-7xl mx-auto">
        <Link href="/" className="sm:react-effect text-glow">
          Home
        </Link>
        <nav>
          <ul className="flex">
            {navMenu.map(({ label, path }) => (
              <li key={path}>
                <Link
                  href={path}
                  className="px-1 sm:px-2 code-effect text-glow text-sm sm:text-base"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </AnimeOnAppear>
  );
}

function Footer() {
  return (
    <AnimeOnAppear direction="bottom">
      <footer className="w-full px-4 py-6 max-w-7xl mx-auto">
        <nav>
          <ul className="flex justify-end">
            {socialMenu.map(({ label, link }) => (
              <li key={link} className="uppercase">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono px-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </AnimeOnAppear>
  );
}
