import AnimeOnAppear from '../components/AnimeOnAppear';
import Layout from '../components/Layout';
import { siteMetadata } from '../config';

function Home() {
  const { title, description } = siteMetadata;
  return (
    <Layout>
      <AnimeOnAppear className="max-w-4xl m-auto px-4">
        <h1 className="h1 title mb-4">{title}</h1>
        <h2 className="h3 subtitle mb-4">{description}</h2>
      </AnimeOnAppear>
    </Layout>
  );
}

export default Home;
