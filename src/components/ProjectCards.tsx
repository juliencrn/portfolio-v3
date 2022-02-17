import { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons';

export function ProjectCard({
  title, excerpt, tags, demoUrl, srcUrl,
}: Project) {
  return (
    <article>
      <div className="flex">
        <h3 className="title h4 mb-1 flex">
          {title}
        </h3>

        {srcUrl && (
          <a href={srcUrl} className="ml-3 m-1" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} className="m-1" target="_blank" rel="noreferrer">
            <ExternalLinkIcon />
          </a>
        )}
      </div>

      <p className="mb-4">{excerpt}</p>
      <p className="text-pink-400">
        <TagList tags={tags} />
      </p>
    </article>
  );
}

export function ProjectSmallCard({
  title, demoUrl, srcUrl, excerpt, tags,
}: Project) {
  return (
    <li className="mb-2 relative">
      <h4 className="title inline-block text-lg">
        {title}
      </h4>

      {tags.length > 0 && (
        <span className=" text-pink-400 inline">
          <TagList tags={tags} max={1} />
        </span>
      )}

      {srcUrl && (
        <a href={srcUrl} className="ml-1 inline-block" target="_blank" rel="noreferrer">
          <GithubIcon className="w-5 h-5" />
        </a>
      )}
      {demoUrl && (
        <a href={demoUrl} className="ml-1 inline-block" target="_blank" rel="noreferrer">
          <ExternalLinkIcon className="w-5 h-5" />
        </a>
      )}

      <p>{excerpt}</p>
    </li>
  );
}

interface TagProps {
  tags: string[]
  max?: number
}

const TagList = ({ tags, max }: TagProps) => (
  <code className="text-sm">
    {tags.slice(0, max || tags.length).map((tag, i) => `${i > 0 ? ' ' : ''} #${tag}`)}
  </code>
);
