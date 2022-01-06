import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { navMenu, siteMetadata, socialMenu } from '../config';

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <title>Julien's portfolio</title>
      <meta name="description" content={siteMetadata.description.replaceAll('\n', ' ')} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="absolute w-full top-0 left-0 p-4">
      <nav>
        <ul className="flex justify-center">
          {navMenu.map(({ label, path }) => (
            <li key={path} className="">
              <Link href={path}>
                <a className="font-mono px-2 code-effect">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    <main className="main">
      {children}
    </main>

    <footer className="w-full p-4 mt-10">
      <ul className="flex justify-center">
        {socialMenu.map(({ label, link }) => (
          <li key={link} className="">
            <a href={link} target="_blank" rel="noreferrer" className="font-mono px-2">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  </>
);

export default Layout;
