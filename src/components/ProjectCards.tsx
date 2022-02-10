import { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons';

export function ProjectSmallCard({
  title, demoUrl, srcUrl, excerpt,
}: Project) {
  const link = srcUrl || demoUrl;
  return (
    <li className="mb-1">
      <a href={link} className="text-gray-50" target="_blank" rel="noreferrer">
        <h4 className="underline inline">{title}</h4>
      </a>
      <span>{`: ${excerpt}`}</span>
    </li>
  );
}

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
      <code className="text-sm text-pink-400">
        {tags.map((tag, i) => `${i > 0 ? ' ' : ''} #${tag}`)}
      </code>
    </article>
  );
}
