import { Project } from '../../types';

function FeaturedProject({
  title, excerpt, tags, link, image,
}: Project) {
  return (
    <li>
      <a href={link} className="text-gray-400 hover:text-gray-400">
        <div className="aspect-macbook relative overflow-hidden">
          <img className="w-full" src={image} alt={title} />
        </div>
        <div className="p-2">
          <h3 className="h5 title my-1">
            {title}
          </h3>
          <p>
            {excerpt}
          </p>

          <ul className="flex flex-wrap mt-4">
            {tags.map((tag) => (
              <li key={tag} className="border px-2 py-0.5 mb-2 inline-block mr-2 font-mono text-sm">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
}

export default FeaturedProject;
