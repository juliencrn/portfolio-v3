import { siteMetadata } from '../config';

function Home() {
  const { title, description } = siteMetadata;
  return (
    <div className="max-w-4xl m-auto px-4">
      <h1 className="h1 title mb-4">
        {title}
      </h1>
      <h2 className="h3 subtitle mb-4">
        {description}
      </h2>
    </div>
  );
}

export default Home;
