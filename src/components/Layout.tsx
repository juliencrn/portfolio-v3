import Head from 'next/head';
import Link from 'next/link';
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
  return (
    <>
      <Head>
        <title>{pageTitle || "Julien's portfolio"}</title>
        <meta name="description" content={siteMetadata.description} />
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
        <Link href="/">
          <a className="sm:react-effect text-glow">Home</a>
        </Link>
        <nav>
          <ul className="flex">
            {navMenu.map(({ label, path }) => (
              <li key={path} className="">
                <Link href={path}>
                  <a className="px-1 sm:px-2 code-effect text-glow text-sm sm:text-base">
                    {label}
                  </a>
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
