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
              {`Bonjour! I'm Julien, a French expat currently based in sunny Spain. I've been immersed in the world of application development, for seven years now, mainly rocking the frontend with React and Typescript.`}
            </p>
            <p className="h3 subtitle mb-4">
              {`Over the years, I've been diving into backend development, perfecting my craft in architecture, design patterns, clean code, and domain design. But what really gets me? Functional programming. Its elegant concepts and problem-solving approach fascinate me.`}
            </p>
            <p className="h3 subtitle mb-4">
              {`I'm captivated by the ongoing crypto-revolution and eager to dedicate more time to its exploration. Beyond coding, I have a keen interest in finance and thrive on hybrid training, engaging in street-lifting, running, and cycling.`}
            </p>
          </section>
        </AnimeOnAppear>
      </div>
    </Layout>
  );
}

export default Home;
