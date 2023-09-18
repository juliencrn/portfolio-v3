/* eslint-disable max-len */
import AnimeOnAppear from '../components/AnimeOnAppear';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto w-full p-4">
        <AnimeOnAppear>
          <section className="my-24">
            <h1 className="title text-glow h1 mb-4 tracking-tight">
              Some words about me
            </h1>

            <p className="h3 subtitle mb-4">
              {`Hello! My name is Julien, I'm French 🇫🇷, living in Spain 🇪🇸. I
              enjoy writing applications since almost 7 years. My main skill is
              frontend dev using React. Currently, I'm learning the backend side (F#, Typescript, Rust 🦀) and falling in love with functional programming.`}
            </p>
            <p className="h3 subtitle mb-4">
              {`I'm very excited about the crypto-revolution going on and want to
              spend more time on it.`}
            </p>
            <p className="h3 subtitle mb-4">
              {`Beside programming, I'm interested in finance and enjoy hybrid training (Street-lifting, Running, Cycling)`}
            </p>
          </section>
        </AnimeOnAppear>
      </div>
    </Layout>
  );
}

export default Home;
