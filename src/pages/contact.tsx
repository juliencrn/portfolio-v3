import AnimeOnAppear from '../components/AnimeOnAppear';
import Layout from '../components/Layout';
import { siteMetadata, socialMenu } from '../config';

function Contact() {
  return (
    <Layout pageTitle="Say hello to Julien">
      <AnimeOnAppear className="m-auto max-w-4xl mx-auto p-4">
        <h1 className="title h1 mb-4">
          <span className="pb-3 inline-block">
            🤙
          </span>
          <br />
          Say hello ―
        </h1>
        <h2 className="subtitle h3 mb-4">
          Tell me about Rust, Typescript, Solidity or crypto-currency.
        </h2>
        <ul className="h3 mb-4">
          <li>
            <a href={`mailto:${siteMetadata.mail}`}>
              {siteMetadata.mail}
            </a>
          </li>
          {socialMenu.map(({ label, link }) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </AnimeOnAppear>
    </Layout>
  );
}

export default Contact;
