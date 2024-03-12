/* eslint-disable max-len */
import AnimeOnAppear from '../components/AnimeOnAppear';
import Layout from '../components/Layout';
import { funding } from '../config';
import projects from '../projects';

function Donate() {
  const usehooks = projects.find(p => p.title === 'usehooks-ts')!;
  return (
    <Layout>
      <div className="max-w-4xl mx-auto w-full p-4">
        <AnimeOnAppear>
          <section className="my-24">
            <h1 className="title text-glow h1 mb-4 tracking-tight">Donate</h1>

            <p className="h3 subtitle mb-4">
              {`Programming hooked me and opened up a whole new world for me, inspiring me to give back to the community through open source.`}
            </p>
            <p className="h3 subtitle mb-4">
              My main open-source project is{` `}
              <a href={usehooks.srcUrl} target="_blank" rel="noreferrer">
                <code>usehooks-ts</code>
              </a>
              {`, a React hook library I created in 2020 downloaded more than 23 million times! I'm committed to its growth, expanding its capabilities to support all major web APIs and making life easier for front-end developers.`}
            </p>
            <p className="h3 subtitle mb-4">
              {`If my work has made your coding journey smoother, consider supporting me with a virtual cheer. Your sponsorship keeps me coding, learning, and sharing with the community.`}
            </p>
            <p className="h3 subtitle mb-4">{`Thank you for your support! ❤️`}</p>
          </section>
          <section className="my-24">
            <h2 className="title h4 mb-4 mt-8 tracking-tight">
              {`Monthly donations`}
            </h2>

            <ul className="pl-5 list-disc">
              <li className="list-item text-lg">
                <a href={funding.github} target="_blank" rel="noreferrer">
                  GitHub Sponsors
                </a>
              </li>
            </ul>

            <h2 className="title h4 mb-4 mt-8 tracking-tight">
              {`One-time donations`}
            </h2>

            <ul className="pl-5 list-disc">
              <li className="list-item text-lg">
                <a href={funding.stripe} target="_blank" rel="noreferrer">
                  Stripe
                </a>{' '}
                (Apple Pay, Google Pay, credit card, etc.)
              </li>
              <li className="list-item text-lg">
                <a href={funding.paypal} target="_blank" rel="noreferrer">
                  PayPal
                </a>
              </li>
              <li className="list-item text-lg">
                BTC: <code>{funding.btc}</code>
              </li>
              <li className="list-item text-lg">
                ETH: <code>{funding.eth}</code>
              </li>
            </ul>
          </section>
        </AnimeOnAppear>
      </div>
    </Layout>
  );
}

export default Donate;
