import { siteMetadata } from '../config';

function Home() {
  const { description } = siteMetadata;
  return (
    <div className="flex max-w-5xl mx-auto w-full min-h-screen">
      <div className="w-full relative m-auto justify-between px-4">
        <p className="title h1 -mt-16">
          <span className="pb-3 inline-block">
            ✌️
          </span>
          <br />
          hi there ―
        </p>
        <h1 className="title h1">
          I'm Julien, passionate dev
        </h1>
        <h2 className="h3 mt-5 mb-4">
          {description.split('\n').map((line) => line.trim()).filter((line) => !!line).map((line, i) => (
            <>
              {i > 0 ? <br /> : ''}
              {line}
            </>
          ))}
        </h2>
      </div>
    </div>
  );
}

export default Home;
